import type { CollectionEntry } from "astro:content";

/**
 * Filter blog posts by published date and order them.
 * Change the sort order by changing the minus sign to a plus sign, or add your new logic by changing the return value.
 *
 * You have access to the post data, so you can sort by any property you want, ex. by tags or title.
 * The sort order is descending, so the newest posts are first.
 *
 * @param posts Collection of blog posts
 * @returns Collection of blog posts sorted by date
 */
export const sortBlogPosts = (posts: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] => {
    return posts.sort((a, b) => {
        return new Date(b.data.postDate).getTime() - new Date(a.data.postDate).getTime()
    })
}

export const sortExperience = (experience: CollectionEntry<'experience'>[]): CollectionEntry<'experience'>[] => {
    return experience.sort((a, b) => {
        return new Date(b.data.startDate).getTime() - new Date(a.data.startDate).getTime()
    })
}

/**
 * Exclude draft posts from the collection. If the site is built in production mode, draft posts are excluded by default.
 *
 * @param post Blog post
 * @returns True if the post is not a draft
 */
export const excludeDrafts = ({ data }: CollectionEntry<'posts'>): boolean => {
    const isDraft = data.draft || false;
    const postDate = new Date(data.postDate);
    const currentDate = new Date();

    // Exclude if it's a draft or the post date is in the future
    return import.meta.env.PROD ? !(isDraft || postDate > currentDate || false) : true;
}

export const excludeInstagram = ({ data }: CollectionEntry<'posts'>): boolean => {
    return data.tags.includes('instagram') ? false : import.meta.env.PROD ? !(data.draft || false) : true;
}

export const convertToAbsoluteUri = (url: string, site: any, path: any = '') : string => {
    if (url.startsWith('http')) {
        return url;
    }

    if (typeof site !== 'string') {
        site = site.toString();
    }

    if (site.endsWith('/')) {
        site = site.slice(0, -1);
    }

    if (typeof path !== 'string') {
        path = path.toString();
    }

    // if parentPath ends with a slash, remove it
    if (path && path.endsWith('/')) {
        path = path.slice(0, -1);
    }

    // replace . at start of url with the full site url
    if (url.startsWith('.')) {
        url = path + url.substring(1);
    }

    // if url starts with a /, remove it
    if (url.startsWith('/')) {
        return `${site}/${url.substring(1)}`;
    }

    return `${site}/${url}`;
}