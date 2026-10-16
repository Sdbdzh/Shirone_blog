/**
 * 技能页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/skillsConfig.ts 控制。
 *
 * 数据本体在 `src/data/skills.json`（后台 /admin/ 的「技能」页面直接编辑：
 * 分类列表 categories + 条目列表 items），本文件只做一层薄封装，导出接口不变。
 */
import type { SkillItem } from "@/types/skillsConfig";
import raw from "./skills.json";

export const skillsData: SkillItem[] = raw.items as SkillItem[];

/** 获取所有技能数据列表 */
export function getSkillsList(): SkillItem[] {
	return skillsData;
}
