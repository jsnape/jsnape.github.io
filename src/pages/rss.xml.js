import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

import { getCollection } from 'astro:content';
import {excludeDrafts, sortBlogPosts} from "@/functions";

const SITE = import.meta.env.SITE;

const customDataTags = [
    // enable Atom feed, as some RSS readers use that format
    // https://www.fpds.gov/wiki/index.php/FAADC_Atom_Feed_Specifications_V_1.0
    `<atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />`,
    // enable language metadata
    `<language>en-us</language>`,
  ];

export async function GET(context) {
    const posts = await getCollection('posts', excludeDrafts)
	    .then(sortBlogPosts);

    return rss({
        title: 'James Snape',
        description: 'Better software through architecture and devops',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.postDate,
            description: post.data.description,
            link: `/${post.slug}/`,
            content: sanitizeHtml(parser.render(post.body), {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
            }),
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
        },        
    });
}