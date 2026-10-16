/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
 *
 * 数据本体在 `src/data/games.json`（后台 /admin/ 的「游戏」页面直接编辑：
 * 分类列表 categories + 条目列表 items），本文件只做一层薄封装，导出接口不变。
 *
 * 封面支持三种写法：
 * - src/assets 相对路径（走 Astro 图片管线自动优化为 webp/avif）；
 * - /public 绝对路径（如 "/assets/games/xxx.webp"，原样输出）；
 * - 远程 URL（https://…）。
 */
import type { GameItem } from "@/types/gamesConfig";
import raw from "./games.json";

export const gamesData: GameItem[] = raw.items as GameItem[];
