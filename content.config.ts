
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        // Home Collection
        home_en: defineCollection({
            source: {
                include: 'en/**/home.md',
            },
        }),
        home_ar: defineCollection({
            source: {
                include: 'ar/**/home.md',
            },
        }),
        // About Collection
        about_en: defineCollection({
            source: 'en/**/about.md',
        }),
        about_ar: defineCollection({
            source: 'ar/**/about.md',
        }),
        // Services Collection
        services_en: defineCollection({
            source: 'en/**/services/*.md',
            schema: z.object({
                slug: z.string().nonempty(),
            })
        }),
        services_ar: defineCollection({
            source: 'ar/**/services/*.md',
            schema: z.object({
                slug: z.string().nonempty(),
            })
        }),
        // Academy Workshop
        Workshop_en: defineCollection({
            source: 'en/**/academy/*.md',
            schema: z.object({
                title: z.string().nonempty(),
                description: z.string(),
                date: z.date(),
                image: z.string(),
            })
        }),
        Workshop_ar: defineCollection({
            source: 'ar/**/academy/*.md',
            schema: z.object({
                title: z.string().nonempty(),
                description: z.string(),
                date: z.date(),
                image: z.string(),
            })
        }),
        // Projects Collection
        projects_en: defineCollection({
            source: 'en/**/projects/*.md',
        }),
        projects_ar: defineCollection({
            source: 'ar/**/projects/*.md',
        }),
        // Project Logs Collection
        projectLogs_en: defineCollection({
            source: 'en/**/project-logs/**/*',
            schema: z.object({
                title: z.string().nonempty(),
                description: z.string(),
                date: z.date(),
                image: z.string(),
                slug: z.string().nonempty(),
            })
        }),
        projectLogs_ar: defineCollection({
            source: 'ar/**/project-logs/**/*',
            schema: z.object({
                title: z.string().nonempty(),
                description: z.string(),
                date: z.date(),
                image: z.string(),
                slug: z.string().nonempty(),
            })
        }),
        // Blogs Collection
        blogs_en: defineCollection({
            source: 'en/**/blogs/*.md',
            schema: z.object({
                title: z.string().nonempty(),
                description: z.string(),
                date: z.date(),
                image: z.string(),
                slug: z.string().nonempty(),
                authors: z.array(
                    z.object({
                        name: z.string(),
                        description: z.string().optional(),
                        avatar: z.object({
                            src: z.string()
                        }).optional(),
                        to: z.string().optional(),
                        target: z.string().optional(),
                        ui: z
                            .object({
                                name: z.string().optional(),
                                description: z.string().optional()
                            })
                            .optional()
                    })
                ).optional()
            })
        }),
        blogs_ar: defineCollection({
            source: 'ar/**/blogs/*.md',
            schema: z.object({
                title: z.string().nonempty(),
                description: z.string(),
                date: z.date(),
                image: z.string(),
                slug: z.string().nonempty(),
                authors: z.array(
                    z.object({
                        name: z.string(),
                        description: z.string().optional(),
                        avatar: z.object({
                            src: z.string()
                        }).optional(),
                        to: z.string().optional(),
                        target: z.string().optional(),
                        ui: z
                            .object({
                                name: z.string().optional(),
                                description: z.string().optional()
                            })
                            .optional()
                    })
                ).optional()
            })
        }),
    }
})
