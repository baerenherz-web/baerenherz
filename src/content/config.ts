import { defineCollection, z } from 'astro:content'

const news = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      cover: image().refine((img) => img.width >= 1080, {
        message: 'Cover image must be at least 1080 pixels wide!'
      }),
      coverAlt: z.string()
    })
})

const aktivitaeten = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      cover: image().refine((img) => img.width >= 1080, {
        message: 'Cover image must be at least 1080 pixels wide!'
      }),
      coverAlt: z.string(),
      link: z.string().optional(),
    })
})

export const collections = { news, aktivitaeten }
