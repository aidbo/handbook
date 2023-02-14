import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
    base: '/',
    lang: 'zh-CN',
    title: 'Handbook',
    description: 'My own technical handbook',
    themeConfig: {
        sidebar: [
            {
                text: '规约',
                items: [
                    {text: '关于手册', link: '/stipulations/README'},
                    {text: '设计规约', link: '/stipulations/design-specification'},
                    {text: '编程风格规约', link: '/stipulations/programming-specification'},
                    {text: '单元测试', link: '/stipulations/unit-test'},
                    {text: '安全规约', link: '/stipulations/security-specification'},
                    {text: 'MySQL 数据库', link: '/stipulations/mysql-database'}
                ]
            }
        ]
    }
})
