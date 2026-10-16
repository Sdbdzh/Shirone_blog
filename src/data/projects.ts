/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 *
 * 数据本体在 `src/data/projects.json`（后台 /admin/ 的「项目」页面直接编辑：
 * 分类列表 categories + 条目列表 items），本文件只做一层薄封装，导出接口不变。
 */
import type { ProjectItem } from "@/types/projectsConfig";
import raw from "./projects.json";

export const projectsData: ProjectItem[] = raw.items as ProjectItem[];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
