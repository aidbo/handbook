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
                    {text: '关于手册', link: '/规约/README'},
                    {text: '设计规约', link: '/规约/design-specification'},
                    {text: '编程规约', link: '/规约/programming-specification'},
                    {text: '单元测试', link: '/规约/unit-test'},
                    {text: '安全规约', link: '/规约/security-specification'},
                    {text: 'MySQL 数据库', link: '/规约/mysql-database'}
                ]
            }
        ]
    }
})
