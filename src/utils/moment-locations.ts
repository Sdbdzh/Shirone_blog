/**
 * 动态「地点」预设。
 *
 * 每个地点对应后台「动态地点」里的一个 JSON（`src/data/locations/<key>.json`），
 * 写动态时可以在下拉里直接选；如果没选地点，而某个地点勾了「设为默认地点」，
 * 就会自动用它的名字——省得每次手动填。
 */

export interface MomentLocation {
	/** 文件名（不含扩展名），来自后台的「文件标识」 */
	key: string;
	/** 显示用的地点名 */
	name: string;
	/** 是否默认地点 */
	isDefault: boolean;
}

const locationModules = import.meta.glob("../data/locations/*.json", {
	eager: true,
}) as Record<string, { default?: unknown }>;

function toLocation(
	path: string,
	module: { default?: unknown },
): MomentLocation | null {
	const raw = module?.default;
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
		return null;
	}
	const data = raw as Record<string, unknown>;
	const name = typeof data.name === "string" ? data.name.trim() : "";
	if (!name) {
		return null;
	}
	const key = path.split("/").pop()?.replace(/\.json$/i, "") ?? "";
	return { key, name, isDefault: data.isDefault === true };
}

/** 读取全部地点，按文件名排序，保证构建结果稳定。 */
export function getMomentLocations(): MomentLocation[] {
	return Object.keys(locationModules)
		.sort()
		.map((path) => toLocation(path, locationModules[path]))
		.filter((item): item is MomentLocation => item !== null);
}

/** 默认地点名；没有设置默认地点时返回空串。 */
export function getDefaultMomentLocation(): string {
	return getMomentLocations().find((item) => item.isDefault)?.name ?? "";
}
