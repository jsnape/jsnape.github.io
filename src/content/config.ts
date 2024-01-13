import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        postDate: z.date(),
        draft: z.boolean().optional(),
        description: z.string().optional(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        tags: z.array(z.string()).default([]),
        categories: z.array(z.string()).default([])
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
    posts: postsCollection,
};
