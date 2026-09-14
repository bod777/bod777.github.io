import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/projects. The body is the story;
// everything the layout needs to place and colour the project is frontmatter.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Which dedication the project sits under on the homepage.
      group: z.enum(['brother', 'mum', 'friends', 'colleague', 'me']),
      order: z.number(),
      summary: z.string(),
      builtWith: z.array(z.string()),
      live: z.url().optional(),
      code: z.url().optional(),
      // Shown instead of links while a project isn't public yet.
      status: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      // "phone" screenshots sit narrower on their plate.
      frame: z.enum(['desktop', 'phone']).default('desktop'),
      // Background behind the screenshot, taken from the app's own palette.
      plate: z.string(),
    }),
});

export const collections = { projects };
