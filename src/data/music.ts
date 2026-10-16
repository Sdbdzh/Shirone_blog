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
 *
 * 注：封面与音频均已改为云端直链（fzsg.de5.net），本地 /public/music 仅作备用。
 */
export const musicTracks: readonly TrackDescriptor[] = [
	{
		id: "song-2",
		title: "Miku",
		artist: "Anamanaguchi、初音ミク",
		cover: "https://fzsg.de5.net/file/AgACAgUAAyEGAAMBBRtihQADD2rSekHniMWvHDg2J5GNyEE0r7CSAAJqGmsb1TaYVn-lN_BpU8r9AQADAgADeAADPQQ.jpg",
		source: "https://fzsg.de5.net/file/CQACAgUAAyEGAAMBBRtihQADI3rSfr_tfLISEkg82FIZnPFwpchrAAJ0IQAC1TaYVi2KQ0chPbvdPQQ.mp3",
	},
	{
		id: "song-3",
		title: "numb numb (feat. Hatsune Miku, Kasane Teto)",
		artist: "TAK、初音ミク、重音テト",
		cover: "https://fzsg.de5.net/file/AgACAgUAAyEGAAMBBRtihQADEWrSekJNh4ntmc59c54XfI8TfIl-AAJsGmsb1TaYVofLJw_epXL-AQADAgADeAADPQQ.jpg",
		source: "https://fzsg.de5.net/file/CQACAgUAAyEGAAMBBRtihQADF2rSfkQpAssNDnVJT8xgOR3HcMGBAAJoIQAC1TaYVrseAAH09MLDTz0E.mp3",
	},
	{
		id: "song-4",
		title: "world.execute (me) ;",
		artist: "Mili",
		cover: "https://fzsg.de5.net/file/AgACAgUAAyEGAAMBBRtihQADEmrSekPadtDRVm_sJSZCQN0YPRmGAAJtGmsb1TaYVk7a5ETmTflHAQADAgADeAADPQQ.jpg",
		source: "https://fzsg.de5.net/file/CQACAgUAAyEGAAMBBRtihQADHGrSfmDs0ubDo4zLHyG2mlo5tcmnAAJtIQAC1TaYVgxs0_Ij2NWkPQQ.mp3",
	},
	{
		id: "song-5",
		title: "アディオス",
		artist: "DAZBEE",
		cover: "https://fzsg.de5.net/file/AgACAgUAAyEGAAMBBRtihQADCWrSejrkK-1ANSNopNf04E2Orl__AAJkGmsb1TaYVjJ481SnpqvvAQADAgADeAADPQQ.jpg",
		source: "https://fzsg.de5.net/file/CQACAgUAAyEGAAMBBRtihQADGmrSfl6fjOZbecFWzp2rXjhZg-wUAAJrIQAC1TaYVhMGBMeWTC3zPQQ.mp3",
	},
	{
		id: "song-6",
		title: "インドア系ならトラックメイカー (内向都是作曲家)",
		artist: "Yunomi",
		cover: "https://fzsg.de5.net/file/AgACAgUAAyEGAAMBBRtihQADC2rSejr89Z9S44tFX-toaB3df1cXAAJmGmsb1TaYVkEIL7FSoMkdAQADAgADeAADPQQ.jpg",
		source: "https://fzsg.de5.net/file/CQACAgUAAyEGAAMBBRtihQADG2rSfl-GggNc-gK638n6KvscILT6AAJsIQAC1TaYVvYTfRnLZCTkPQQ.mp3",
	},
	{
		id: "song-7",
		title: "ドゥーマー (Doomer)",
		artist: "東京真中",
		cover: "https://fzsg.de5.net/file/AgACAgUAAyEGAAMBBRtihQADCmrSejoyFOG7_yDO1KTGX3BhSJnDAAJlGmsb1TaYVsRQ5hGJRAu-AQADAgADeAADPQQ.jpg",
		source: "https://fzsg.de5.net/file/CQACAgUAAyEGAAMBBRtihQADHWrSfm6_7kJeMugAAdUyIFwNLp_HRgACbiEAAtU2mFYa7kBLFgHtlz0E.mp3",
	},
	{
		id: "song-8",
		title: "彼女は旅に出る (她踏上了旅程)",
		artist: "鎖那",
		cover: "https://fzsg.de5.net/file/AgACAgUAAyEGAAMBBRtihQADDmrSekFaQLao0_yIQIDMIVho2KFIAAJpGmsb1TaYVrTggYer4TxXAQADAgADeAADPQQ.png",
		source: "https://fzsg.de5.net/file/CQACAgUAAyEGAAMBBRtihQADHmrSfm7oB3XsUhRNqJdfHWzTUKQyAAJvIQAC1TaYVkM1qRdBVYkfPQQ.mp3",
	},
	{
		id: "song-9",
		title: "恋音と雨空 (恋歌与雨天)",
		artist: "Lefty Hand Cream",
		cover: "https://fzsg.de5.net/file/AgACAgUAAyEGAAMBBRtihQADDWrSej3zZ8hsTMs6UCtkfC2IxFfIAAJoGmsb1TaYVk77eKeYfsErAQADAgADeAADPQQ.jpg",
		source: "https://fzsg.de5.net/file/CQACAgUAAyEGAAMBBRtihQADIWrSfrEFm_QUmeLeOhsuYhSvX7sEAAJyIQAC1TaYVl3QobVxjIlDPQQ.mp3",
	},
	{
		id: "song-10",
		title: "生きる (活下去)",
		artist: "兰音Reine、可不",
		cover: "https://fzsg.de5.net/file/AgACAgUAAyEGAAMBBRtihQADDGrSej27hh6DaJ91b67sGyV2DP6ZAAJnGmsb1TaYVk-7QmSvqniBAQADAgADeAADPQQ.jpg",
		source: "https://fzsg.de5.net/file/CQACAgUAAyEGAAMBBRtihQADIGrSfqKMrPvA4Q1voC3tyg3zoTMrAAJxIQAC1TaYVlo0qKtsFkNQPQQ.mp3",
	},
	{
		id: "song-11",
		title: "永久の宴 (Zekk Remix)",
		artist: "Aiobahn、YUC’e、TANUKI",
		cover: "https://fzsg.de5.net/file/AgACAgUAAyEGAAMBBRtihQADEGrSekEkHr_xyPtJuCY4yKrt1_e_AAJrGmsb1TaYVitg3IDBd9jeAQADAgADeAADPQQ.jpg",
		source: "https://fzsg.de5.net/file/CQACAgUAAyEGAAMBBRtihQADImrSfriQrA5YxVnjuykfEzpHoGvnAAJzIQAC1TaYVnpYzJW3h9P3PQQ.mp3",
	},
];
