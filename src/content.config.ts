import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        postDate: z.date(),
        draft: z.boolean().optional(),
        description: z.string().optional(),
        image: z.object({
            src: image(),
            alt: z.string()
        }).optional(),
        tags: z.array(z.string()).default([]),
        categories: z.array(z.string()).default([])
    })
});

const experienceCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        role: z.string().optional(),
        startDate: z.date(),
        endDate: z.date().optional(),
        locationType: z.string().default("remote"),
        location: z.string().optional(),
        employmentType: z.string().default("Full-time"),
        companyName: z.string().optional(),
        companyUrl: z.string().optional(),
        companyLogo: z.object({
            src: image(),
            alt: z.string()
        }).optional(),
        skills: z.array(z.string()).default([]),
        technologies: z.array(z.string()).default([])
    })
});

export const collections = {
    posts: postsCollection,
    experience: experienceCollection,
};
