import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    heroImage: z.string(),
  }),
});

export const collections = { blog };
