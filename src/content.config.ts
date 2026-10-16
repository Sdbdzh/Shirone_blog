import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * 日期字段：同时接受 YAML 原生日期与字符串日期。
 * Decap / Sveltia CMS 写回 frontmatter 时会给日期加引号，纯 z.date() 会报
 * `Expected type "date", received "string"`，这里统一先转成 Date 再校验。
 */
const looseDate = (value: unknown) =>
	typeof value === "string" || typeof value === "number"
		? new Date(value)
		: value;

const postsCollection = defineCollection({
	loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		published: z.preprocess(looseDate, z.date()),
		publishedAt: z.preprocess(looseDate, z.date()).optional(),
		updated: z.preprocess(looseDate, z.date()).optional(),
		updatedAt: z.preprocess(looseDate, z.date()).optional(),
		pinned: z.boolean().optional().default(false),
		draft: z.boolean().optional().default(false),
		comment: z.boolean().optional().default(true),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		/** 所属系列 slug（空 = 不属于任何系列；单归属；落库前统一 trim） */
		series: z
			.string()
			.optional()
			.default("")
			.transform((value) => value.trim()),
		/** 系列内顺序；缺省回退为按发布日期排 */
		seriesOrder: z.number().int().optional(),
		lang: z.string().optional().default(""),

		/* Post Encryption */
		encrypted: z.boolean().optional().default(false),
		password: z
			.union([z.string(), z.number()])
			.transform((v) => String(v))
			.optional(),
		passwordHint: z.string().optional().default(""),
		hideHomeContent: z.boolean().optional().default(true),

		/* Post alias & custom permalink */
		alias: z.string().optional(),
		permalink: z.string().optional(),

		/* For internal use */
		prevUrl: z.string().optional(),
		nextUrl: z.string().optional(),
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

const specCollection = defineCollection({
	loader: glob({ base: "./src/content/spec", pattern: "**/*.{md,mdx}" }),
	schema: z.object({}),
});

/**
 * 系列实体集合：每篇 = 一个系列。body 是可选总览，未写则系列页仅列文章。
 * defaultCategory 是回退值（显式 category 优先），解析见 utils/series-utils.ts。
 */
const seriesCollection = defineCollection({
	loader: glob({ base: "./src/content/series", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		status: z.enum(["ongoing", "completed"]).optional().default("ongoing"),
		defaultCategory: z.string().optional().default(""),
	}),
});

const momentsCollection = defineCollection({
	loader: glob({ base: "./src/content/moments", pattern: "**/*.md" }),
	schema: z.object({
		published: z.preprocess(looseDate, z.date()),
		pinned: z.boolean().optional().default(false),
		location: z.string().optional().default(""),
		/** Mood icon (Iconify name, e.g. `material-symbols:sentiment-excited-outline-rounded`). */
		mood: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		images: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string().optional().default(""),
				}),
			)
			.optional()
			.default([]),
		draft: z.boolean().optional().default(false),
	}),
});

export const collections = {
	posts: postsCollection,
	spec: specCollection,
	series: seriesCollection,
	moments: momentsCollection,
} as const;
