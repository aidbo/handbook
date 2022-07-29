const { defaultTheme } = require('vuepress')

module.exports = {
  base: '/',
  lang: 'zh-cmn-Hans',
  title: '开发手册',
  description: '专属于我的开发手册',
  theme: defaultTheme({
    navbar: [
      {
        text: 'Github',
        link: 'https://github.com/zhengbangbo',
      },
    ],
    sidebar: [
      {
        text: '关于手册',
        link: '/'
      },
      {
        text: '设计规约',
        link: '/design-specification'
      },
      {
        text: '编程规约',
        link: '/programming-specification'
      },
      {
        text: '单元测试',
        link: '/unit-test'
      },
      {
        text: '安全规约',
        link: '/security-specification'
      },
      {
        text: 'MySQL 数据库',
        link: '/mysql-database'
      }
    ]
  }),
}
