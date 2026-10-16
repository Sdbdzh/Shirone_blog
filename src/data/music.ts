import type { TrackDescriptor } from "@/types/musicConfig";

/**
 * 侧栏音乐本地曲目数据源。
 * 遵循「零额外负担」原则：配置与数据解耦，此处专用于管理本地曲目列表。
 *
 * 添加曲目：在 musicTracks 中追加一项即可：
 * - id: 唯一标识
 * - title: 曲目标题
 * - artist: 艺术家（可选）
 * - cover: 封面图地址（可选；推荐相对 /src，亦支持 /public 或绝对 URL）
 * - source: 音频文件地址（相对 /public 或绝对 URL）
 * - duration: 曲目时长（秒，可选）
 */
export const musicTracks: readonly TrackDescriptor[] = [
	{
		id: "song-2",
		title: "Miku",
		artist: "Anamanaguchi、初音ミク",
		cover: "/assets/music/cover/Miku - Anamanaguchi、初音ミク.jpg",
		source: "/music/Miku - Anamanaguchi、初音ミク.flac",
	},
	{
		id: "song-3",
		title: "numb numb (feat. Hatsune Miku, Kasane Teto)",
		artist: "TAK、初音ミク、重音テト",
		cover: "/assets/music/cover/numb numb (feat. Hatsune Miku, Kasane Teto) - TAK、初音ミク、重音テト.jpg",
		source: "/music/numb numb (feat. Hatsune Miku, Kasane Teto) - TAK、初音ミク、重音テト.flac",
	},
	{
		id: "song-4",
		title: "world.execute (me) ;",
		artist: "Mili",
		cover: "/assets/music/cover/world.execute (me) ; - Mili.jpg",
		source: "/music/world.execute (me) ; - Mili.flac",
	},
	{
		id: "song-5",
		title: "アディオス",
		artist: "DAZBEE",
		cover: "/assets/music/cover/アディオス - DAZBEE.jpg",
		source: "/music/アディオス - DAZBEE.flac",
	},
	{
		id: "song-6",
		title: "インドア系ならトラックメイカー (内向都是作曲家)",
		artist: "Yunomi",
		cover: "/assets/music/cover/インドア系ならトラックメイカー (内向都是作曲家) - Yunomi.jpg",
		source: "/music/インドア系ならトラックメイカー (内向都是作曲家) - Yunomi.flac",
	},
	{
		id: "song-7",
		title: "ドゥーマー (Doomer)",
		artist: "東京真中",
		cover: "/assets/music/cover/ドゥーマー (Doomer) - 東京真中.jpg",
		source: "/music/ドゥーマー (Doomer) - 東京真中.flac",
	},
	{
		id: "song-8",
		title: "彼女は旅に出る (她踏上了旅程)",
		artist: "鎖那",
		cover: "/assets/music/cover/彼女は旅に出る (她踏上了旅程) - 鎖那.png",
		source: "/music/彼女は旅に出る (她踏上了旅程) - 鎖那.flac",
	},
	{
		id: "song-9",
		title: "恋音と雨空 (恋歌与雨天)",
		artist: "Lefty Hand Cream",
		cover: "/assets/music/cover/恋音と雨空 (恋歌与雨天) - Lefty Hand Cream.jpg",
		source: "/music/恋音と雨空 (恋歌与雨天) - Lefty Hand Cream.flac",
	},
	{
		id: "song-10",
		title: "生きる (活下去)",
		artist: "兰音Reine、可不",
		cover: "/assets/music/cover/生きる (活下去) - 兰音Reine、可不.jpg",
		source: "/music/生きる (活下去) - 兰音Reine、可不.mp3",
	},
	{
		id: "song-11",
		title: "永久の宴 (Zekk Remix)",
		artist: "Aiobahn、YUC’e、TANUKI",
		cover: "/assets/music/cover/永久の宴 (Zekk Remix) - Aiobahn、YUC’e、TANUKI.jpg",
		source: "/music/永久の宴 (Zekk Remix) - Aiobahn、YUC’e、TANUKI.mp3",
	},
];
