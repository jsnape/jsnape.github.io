import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import {excludeDrafts, sortBlogPosts} from "@/functions";

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
          })),
        customData: `<language>en-us</language>`,
    });
}