import { defineConfig } from 'vitepress'

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    appearance: true,
    base: '/',
    lang: 'zh-CN',
    title: '手册',
    titleTemplate: ':title - 📖',
    description: '自用技术手册',
    lastUpdated: true,
    cleanUrls: true,
    themeConfig: {
        logo: 'https://avatars.githubusercontent.com/u/18254135',
        sidebar: [
            {
                text: '规约',
                link: '/stipulations/',
                items: [
                    {text: '设计规约', link: '/stipulations/design-specification'},
                    {text: '编程风格规约', link: '/stipulations/programming-specification'},
                    {text: '单元测试', link: '/stipulations/unit-test'},
                    {text: '安全规约', link: '/stipulations/security-specification'},
                    {text: 'MySQL 数据库', link: '/stipulations/mysql-database'}
                ]
            }
        ],
        aside: true,
        outline: "deep",
        socialLinks: [
            {icon: 'github', link: 'https://github.com/zhengbangbo'},
            {icon: 'twitter', link: 'https://twitter.com/zhengbangbo'},
        ],
        lastUpdatedText: '上次更新',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        returnToTopLabel: '返回顶部',
    }
}

export default defineConfig(config)
