import { z, defineCollection } from 'astro:content';

const poemsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(), // For your Cloudinary URLs
    image_style: z.string().optional(), // e.g., 'sepia', 'blur'
    theme: z.enum(['light', 'dark']).optional(), // Controls page color
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'poems': poemsCollection,
};