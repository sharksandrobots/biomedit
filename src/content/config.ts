import { defineCollection, z } from 'astro:content';

// Point your Obsidian vault at src/content/notes.
// Every markdown file you save there needs this frontmatter:
//
// ---
// title: "Some title"
// date: 2026-07-08
// summary: "One line, optional"
// ---

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
  }),
});

export const collections = { notes };
