import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'data',
      source: '**/*.{yaml,yml}',
      schema: z.object({
        screens: z.array(z.string()),
        layout: z.string(),
        duration: z.number(),
        position: z.number(),
        data: z.any().optional(),
        scheduler: z.object({
          dateFrom: z.date().optional(),
          dateTo: z.date().optional(),
          timeFrom: z.string().optional(),
          timeTo: z.string().optional(),
          days: z.array(z.number()).optional(),
        }).optional(),
      }),
    }),
  },
})
