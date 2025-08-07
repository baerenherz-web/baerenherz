import { defineCollection, z } from 'astro:content';

const aktivitaetenSchema = ({ image }: any) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    cover: image(),
    coverAlt: z.string(),
    link: z.string().optional(),
  });

const newsSchema = ({ image }: any) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    cover: image(),
    coverAlt: z.string(),
  });

export const collections = {
  'aktivitaeten-ch': defineCollection({ schema: aktivitaetenSchema }),
  'aktivitaeten-de': defineCollection({ schema: aktivitaetenSchema }),
  'news': defineCollection({ schema: newsSchema }),
};
