import type { UserConfig } from "vitepress";
import { defineConfig } from "vitepress";
import algolia from "./algolia";

const config: UserConfig = {
  appearance: true,
  lang: "zh-CN",
  title: "帮博工作手册",
  titleTemplate: ":title - 📖",
  description: "软件开发、测试、运维，包罗万象",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/18254135",
    nav: [
      {
        text: "备忘",
        items: [
          { text: "Visual Studio Code", link: "/memo/vscode" },
          { text: "Git", link: "https://chodocs.cn/memo/git-command/" },
          {
            text: "Modern Unix",
            link: "https://github.com/ibraheemdev/modern-unix",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "规约",
        link: "/stipulations/",
        items: [
          { text: "设计", link: "/stipulations/design-specification" },
          { text: "编程", link: "/stipulations/programming-specification" },
          { text: "单元测试", link: "/stipulations/unit-test" },
          { text: "安全", link: "/stipulations/security-specification" },
          { text: "MySQL 数据库", link: "/stipulations/mysql-database" },
        ],
      },
      {
        text: "命名",
        link: "/naming/",
        items: [
          { text: "JavaScript", link: "/naming/javascript" },
          { text: "REST API", link: "/naming/resource" },
        ],
      },
      {
        text: "杂项",
        link: "/chore/",
        items: [{ text: "墙内部署开发环境", link: "/chore/inside-the-walls" }],
      },
    ],
    aside: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/zhengbangbo" },
      { icon: "twitter", link: "https://twitter.com/zhengbangbo" },
    ],
    lastUpdatedText: "上次更新",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    returnToTopLabel: "返回顶部",
    algolia,
  },
};

export default defineConfig(config);
