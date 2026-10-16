import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Enik",
	bio: "性染色体:XY | 初三牲 | АДЛИН循环中 | 折腾X86比写作业积极 | C#&py半吊子 | 大部分时间在听，偶尔想说点什么 | 夜行生物，白天靠电脑续命",
	links: [
		{
			name: "个人主页",
			icon: "material-symbols:home-outline-rounded",
			url: "https://enik.de5.net/",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Sdbdzh/Shirone_blog",
		},
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/3546656236636442",
		},
		{
			name: "Telegram",
			icon: "fa7-brands:telegram",
			url: "https://t.me/enikawa",
		},
		{
			name: "QQ邮箱",
			icon: "fa7-solid:envelope",
			url: "mailto:enikawa@qq.com",
		},
		{
			name: "Gmail",
			icon: "fa7-solid:envelope",
			url: "mailto:enikqwq@gmail.com",
		},
	],
});
