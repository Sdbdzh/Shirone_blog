/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 *
 * 数据本体在 `src/data/devices.json`（后台 /admin/ 的「我的设备」页面直接编辑：
 * 分类列表 categories + 条目列表 items），本文件只做一层薄封装，导出接口不变。
 */
import type { DeviceItem } from "@/types/devicesConfig";
import raw from "./devices.json";

export const devicesData: DeviceItem[] = raw.items as DeviceItem[];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
