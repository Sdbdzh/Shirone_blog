import type { ProjectsConfig } from "@/types/projectsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";
import raw from "../data/projects.json";

/**
 * 项目页行为与展示配置。
 *
 * 遵循「配置管行为，数据管内容」原则：
 * - enable：页面总开关；false 时导航入口同步隐藏，访问 /projects/ 跳转 404；
 * - categories：筛选分类清单（数组顺序即页面顶部 Chips 顺序）；
 * - disabledKeys：可选被禁用的项目 key 列表（例如 ["folkpatch"]）；
 *
 * 注：分类清单与项目条目都已放到 `src/data/projects.json`，
 * 后台 /admin/ 的「项目」页面可直接增删改（categories 与 items）。
 */
export const projectsConfig: ProjectsConfig = withUserConfig("projects", {
	enable: true,
	title: "$t:projects",
	description: "$t:projectsBanner",
	categories: raw.categories,
	// disabledKeys: [],
});
