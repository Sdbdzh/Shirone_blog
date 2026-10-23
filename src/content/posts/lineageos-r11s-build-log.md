---
title: OPPO R11s LineageOS 18.1 编译项目 · 全程实录
published: 2026-10-24
permalink: lineageos-r11s-build-log
description: 从 269GB 失误到 812MB ROM 成功刷入：OPPO R11s 编译 LineageOS 18.1（Android 11）的七天实录，含七大坑与完整刷机方案。
image: ""
tags:
  - Android
  - LineageOS
  - 刷机
  - 编译
category: 折腾实录
series: ""
draft: false
pinned: false
comment: true
---

> 项目周期：2026-10-17（周六）～ 2026-10-24（周六），日历跨度 7 天
> 实际有效工作 3 天：周日（10-18）+ 周五（10-23）+ 周六（10-24）；**周一~周四（10-19~22）在学校，项目挂机暂停**
> 最终成果：OPPO R11s 成功运行自编译的 LineageOS 18.1（Android 11），全功能正常
> 本文档基于文件系统时间戳 + 会话记录重建，数据可靠；中段挂机由 /tmp 为空 + 无构建痕迹证实

## 一、项目档案

| 项 | 内容 |
|---|---|
| 目标机型 | OPPO R11s（骁龙 660 / SDM660） |
| 编译系统 | LineageOS 18.1（Android 11，build ID：RQ3A.211001.001） |
| 构建变体 | `lineage_R11s-userdebug`（UNOFFICIAL，test-keys） |
| 设备仓库 | `github.com/oppo-sdm660-devs`（5 个仓库） |
| 构建环境 | WSL2 Ubuntu 22.04.5（E:\WSL_linux\Ubuntu-22.04） |
| 硬件配置 | 16 线程 / 18GB RAM + 40GB swap / -j16 |
| 最终产物 | ROM zip 812MB + 直刷镜像 5 个（boot/system/vendor/recovery/vbmeta） |
| 编译耗时 | 全量 5h08m + 增量收尾 25m |

**ROM 版本号（手机「关于手机」实测）：**

```
lineage_R11s-userdebug 11 RQ3A.211001.001 eng.root.20261023.191054 test-keys
18.1-20261023-UNOFFICIAL-R11s
```

**产出物位置：`H:\LineageOS-R11s\`**

```
lineage-18.1-20261023-UNOFFICIAL-R11s.zip    812MB  (OTA 包)
boot.img    18MB    system.img    1.6GB    vendor.img    620MB
recovery.img 25MB   vbmeta.img    64KB（禁用校验版）
```

## 二、精确时间线（文件系统时间戳重建）

### 10-17（周六）—— 出师不利

- 确认目标：编译 R11s 类原生，选定 lineage-22.2（Android 15）
- 搭建第一次环境：WSL Ubuntu **24.04**
- 开始同步源码，**犯下本项目最大失误**：`repo sync` 没加 `--depth=1`
  - git 历史占体积 70-80%，源码一路冲到 **269GB**
  - E 盘被撑到仅剩 **0.02GB**
- **23:33** 左右：手动 `sudo rm -rf ~/lineage-r11s/*` 删源码
- 深夜：WSL 崩溃（E_UNEXPECTED 灾难性故障），24.04 的 vhdx 彻底删除

### 10-18（周日）—— 推倒重来

- 手动安装 **Ubuntu 22.04**（选 22.04 原因：18.1 需要的 libtinfo5/python2 在 24.04 已移除）
- **10:21**：长期记忆文件建立（`LineageOS-R11s-长期记忆.md`）
- **10:33**：`Ubuntu-22.04\ext4.vhdx` 创建
- **11:10**：源码 checkout 完成（envsetup.sh 时间戳）——这次带上了 `--depth=1`
  - 源码从上次 269GB → **82GB**（浅克隆生效）
- **13:21**：5 个设备仓库全部 clone 完成（BFSU + gh-proxy 镜像加速）

### 10-19 ～ 10-22（周一～周四）—— 挂机四天（在学校）

- **文件系统证据**：/tmp 为空（WSL 未运行）、源码树无任何新文件、out/ 无构建产物
- **周日晚**：第一次 soong 尝试在 13:31 留下锁文件后中断（13:31:56 最后痕迹），之后 WSL 关闭
- 周五 18:41 WSL 重新启动（/tmp 系统目录时间戳）——放学回家继续
- **实际有效工作时间只有 3 天：周日（10-18）+ 周五（10-23）+ 周六（10-24）**

### 10-23（周五）—— 放学回家，编译主日

- **18:41**：WSL 启动，项目复活
- **18:55**：`prebuilts/clang/host/linux-x86` 补同步完成（TUNA 镜像，5.6GB pack，1 轮成功）
  - 解决 soong 报的 `llvm-build-host-tools-defaults undefined`
- **19:06**：soong bootstrap 正式跑通
- **19:16**：第一次全量编译启动（118,166 个任务，-j16）

### 10-24（周六）—— 收官之夜（最密集的一夜）

| 时刻 | 事件 |
|---|---|
| **02:47** | `git lfs pull` 修好 webview.apk —— 编译在 99% 处报 `Invalid file`，根因是 webview.apk 只有 134 字节（Git LFS 指针未拉取），四个架构各拉真实文件（247M/94M/150M/341M） |
| **03:13** | 内核 `Image.gz-dtb` 编译产出（boot.img 同期生成） |
| **03:24** | **ROM zip 完成**：`lineage-18.1-20261023-UNOFFICIAL-R11s.zip`（812MB），`build completed successfully (25:17)` |
| **03:36** | 复制 ROM 到 H 盘（第一次复制 C 盘因空间满失败，C 盘剩 0） |
| **05:42** | 从 target_files 解包直刷三件套（boot/system/vendor）到 H 盘 |
| **06:12** | 生成禁用校验的 vbmeta.img（实际 65537 字节，比分区大 1 字节——歪打正着的关键） |
| **06:12 后** | fastboot 刷入 → vbmeta 报 `Volume Full` 写入失败 → **但开机成功！** |
| **06:46** | 记忆文件更新（更正版本映射：18.1 = Android 11，非 9） |

## 三、踩坑全记录（7 大坑）

### 坑 1：repo sync 漏了 --depth=1（最贵的一坑）

- **代价**：269GB 白下，E 盘撑爆，WSL 崩溃，一天时间
- **原理**：git 历史占源码体积 70-80%，浅克隆只取最新快照
- **教训**：`repo init --depth=1` 必须带；repo v2.17 的 `repo sync` 不支持 `--depth`，需用 `repo init --depth=1` + manifest 注入

### 坑 2：clang 工具链未同步

- **现象**：soong 阶段报 `"versioner" depends on undefined module "llvm-build-host-tools-defaults"`
- **根因**：`prebuilts/clang/host/linux-x86` 整个目录没同步下来（曾尝试 stub 补模块——补不完，连环缺）
- **解法**：`repo sync prebuilts/clang/host/linux-x86`（TUNA 镜像，5.6GB，重试循环 1 轮成功）

### 坑 3：GCC 4.9 需要 python2

- **现象**：内核编译报 `aarch64-linux-android-gcc: No such file or directory`
- **根因**：GCC 4.9 的 gcc 是 `#!/usr/bin/python` wrapper 脚本，Ubuntu 22.04 没有 python2
- **解法**：`apt install python2-minimal` + `ln -sf /usr/bin/python2 /usr/bin/python`

### 坑 4：webview.apk 是 LFS 指针（99% 处翻车）

- **现象**：编译到 99% 报 `webview.apk: failed opening zip: Invalid file`
- **根因**：chromium-webview 是 Git LFS 仓库，repo sync 没拉真文件，webview.apk 只有 134 字节指针
- **解法**：四个架构目录逐个 `git lfs pull`（LFS 服务器 review.lineageos.org 可直连）

### 坑 5：OTA zip 刷不进（TWRP E1001 + 验签失败）

- **现象**：TWRP 刷 zip 报 `E1001: Failed to update system image`；换自编译 recovery sideload 报 `Signature verification failed`
- **根因**：①旧 TWRP 不支持 brotli/v4 transfer list；②eng 构建（eng.root）的 zip 没过整包签名，recovery 只认 otacerts 里的 testkey/lineage 键
- **解法**：放弃 OTA zip，改用 **fastboot 镜像直刷**

### 坑 6：镜像直刷后卡开机动画（AVB 拦截）

- **现象**：boot/system/vendor 全刷入，卡 LineageOS 开机动画，双清无效
- **根因**：R11s 出厂 ColorOS 带 AVB 校验，原厂 vbmeta 拦截第三方 system/vendor
- **解法**：刷入禁用校验的 vbmeta（flags=3：verity + verification 全禁）

### 坑 7：vbmeta 分区恰好 65536 字节（歪打正着的一坑）

- **现象**：`fastboot flash vbmeta` 报 `Volume Full` 写入失败
- **根因**：R11s 的 vbmeta 分区恰好 65536 字节，自制镜像 65537 字节（padding 多了 1 字节）
- **意外结局**：fastboot 流式写入已把含 `AVB0` magic 的头部落盘 → vbmeta 处于损坏状态 → **AVB 失效放行 → 开机成功**
- **经验**：卡开机动画时，故意把 vbmeta 分区搞坏也是一条路（或精确生成 65536 字节整、flags=3 的镜像）

## 四、镜像路由表（最终验证版）

| 目标 | 走哪条路 | 说明 |
|---|---|---|
| AOSP 官方仓 | **TUNA** `mirrors.tuna.tsinghua.edu.cn/git/AOSP/` | 直连必挂（gnutls）；大 pack 稳 |
| LineageOS 的 GitHub 仓库 | **BFSU** `mirrors.bfsu.edu.cn/git/lineageOS/` | 小仓库快；大 pack 会断 |
| 其他 GitHub 仓库 | **gh-proxy** `v4.gh-proxy.org/https://github.com/...` | 只代理 github.com |
| LFS 大文件 | **直连** `review.lineageos.org` | `git lfs pull` 直接成功 |
| repo 工具本体 | `--repo-url=.../GerritCodeReview/git-repo.git` | gerrit.googlesource.com 不通 |

## 五、LineageOS 与 Android 版本映射（本项目实测确认）

| LineageOS | Android |
|---|---|
| 16.0 | 9 |
| 17.1 | 10 |
| **18.1** | **11** ← 本次编译 |
| 19.1 | 12 |
| 20 | 13 |
| 21 | 14 |
| 22.2 | 15 |

> 曾误以为 18.1 = Android 9，后经 build ID `RQ3A.211001.001` 确认为 Android 11

## 六、刷机最终方案（成功路径）

```cmd
cd H:\LineageOS-R11s

:: 1. 手机进 fastboot（音量下 + 电源）
fastboot flash boot boot.img
fastboot flash system system.img
fastboot flash vendor vendor.img
fastboot flash recovery recovery.img

:: 2. vbmeta（禁用 AVB 校验 —— 卡开机动画时的关键）
fastboot flash vbmeta vbmeta.img
:: （若报 Volume Full 反而可能因半写入破坏 vbmeta 而成功开机）

:: 3. 清数据（重要！双系统数据残留是开机失败头号原因）
::    进 recovery → Format Data（不是 Wipe）

fastboot reboot
```

## 七、统计总览

| 项 | 数据 |
|---|---|
| 日历跨度 | 7 天（10-17 周六 ～ 10-24 周六） |
| **实际有效工作日** | **3 天**（周日 10-18 / 周五 10-23 / 周六 10-24；周一~周四挂机） |
| 环境推倒重来 | 2 次（24.04→22.04；vhdx 删除重装） |
| 源码重下 | 2 次（269G 浪费 + 82G 成功） |
| 编译失败重试 | 3 次中途报错 + 最终成功 |
| 刷机方案尝试 | 3 种（TWRP zip → sideload → fastboot 直刷） |
| 最长单次等待 | 全量编译 5h08m（周五 19:16 ～ 周六 02:01） |
| 收官之夜 | 10-24 凌晨 02:47 ～ 06:12（3.5 小时连破 3 关：LFS→打包→vbmeta） |
| 熬的夜 | 周六深夜 + 周日凌晨 + 周五整夜（≥ 2 个通宵） |

## 八、资产清单（项目结束后保留）

| 位置 | 内容 |
|---|---|
| `H:\LineageOS-R11s\` | ROM zip + 5 个直刷镜像（3GB） |
| `H:\DSH_XiangMu\wsl01\` | 长期记忆文件 + 本实录 |
| WSL `/root/lineage-r11s` | 完整源码树（~235G，可增量重编，20-40 分钟/次） |
| 手机 | OPPO R11s 运行 LineageOS 18.1 / Android 11，全功能正常 |

---

*本文档生成于 2026-10-24 07:00，依据文件系统时间戳与项目记录整理*
