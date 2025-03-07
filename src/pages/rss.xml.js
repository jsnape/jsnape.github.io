import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

import { getCollection } from 'astro:content';
import { excludeInstagram, sortBlogPosts, convertToAbsoluteUri } from "@/functions";

const SITE = import.meta.env.SITE;
const YEAR = new Date().getFullYear();
const LAST_BUILD_DATE = new Date().toUTCString();

const customDataTags = [
  // enable Atom feed, as some RSS readers use that format
  // https://www.fpds.gov/wiki/index.php/FAADC_Atom_Feed_Specifications_V_1.0
  `<atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />`,
  // enable language metadata
  `<language>en-us</language>`,
  `<category>Software development</category>`,
  `<copyright>${YEAR} James Snape. All rights reserved.</copyright>`,
  `<image>
    <url>https://snape.me/favicon.png</url>
    <title>James Snape</title>
    <link>https://snape.me/</link>
    </image>`,
  `<lastBuildDate>${LAST_BUILD_DATE}</lastBuildDate>`,
];

function appendPermalink(html, link) {

  // if the html contains an image then we need to prepend with a disclaimer.
  // This is because the RSS feed does not support embedded images.
  if (html.includes('<img')) {
    html = `<p><a href="${link}">Embedded images not supported yet. Click to view the post online.</a></p>${html}`;
  }

  return `${html}<p>Originally posted at <a href="${link}">${link}</a></p>`;
}

// This is the main function that will be called by Astro to generate the RSS feed
export async function GET(context) {
  const posts = await getCollection('posts', excludeInstagram)
    .then(sortBlogPosts);

  return rss({
    title: 'James Snape',
    description: 'Better software through architecture and devops',
    site: context.site,

    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.postDate,
      description: post.data.description || post.data.title,
      link: `/${post.slug}/`,
      content: sanitizeHtml(appendPermalink(parser.render(post.body ?? ""), `${context.site}${post.slug}`), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'a']),
        allowedAttributes: {
          img: ["src", "alt"],
          a: ["href", "title"]
        },
        transformTags: {
          'img': (tagName, attribs) => {
            tagName;
            return {
              tagName: 'a',
              attribs: {
                href: `${context.site}${post.slug}`,
                title: attribs.alt,
              },
              text: `${attribs.alt}: embedded images not supported yet. Click to view the post online.`
            };
          },
          'a': (tagName, attribs) => {
            return {
              tagName: tagName,
              attribs: {
                href: convertToAbsoluteUri(attribs.href, context.site, context.path),
              },
            };
          },
        },
      }),
      categories: post.data.tags,
      // custom data for media. The url must be the full url (including https://)
      customData: post.data.image != null ? `<media:content
            type="image/${post.data.image.src.format == "jpg" ? "jpeg" : "png"}"
            width="${post.data.image.src.width}"
            height="${post.data.image.src.height}"
            medium="image"
            url="${context.site + post.data.image.src.src}" />
            ` : '',
    })),
    // inject custom tags defined above as a string so that we have support
    // for the Atom feed standard and give RSS readers information about what
    // language our posts are in
    customData: customDataTags.join(''),
    // inject the `xmlns:content` attribute with the namespace that defines
    // how the <content:encoded> element should work (as it's not part of
    // the RSS 2.0 spec by default)
    xmlns: {
      // the namespace that enables Atom feed
      atom: 'http://www.w3.org/2005/Atom',
      // the namespace that enables the <content:encoding> tag
      content: 'http://purl.org/rss/1.0/modules/content/',
      // required for media:content tag
      media: "http://search.yahoo.com/mrss/",
    },
  });
}