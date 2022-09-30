const sidebar = {
  '/': [
    //{ text: '快速开始', link: '/' },
    {
      text: '通用',
      items: [
        { text: 'button', link: '/components/button' },
      ]
    },
  ]
}
const config = {
  title: '欢迎使用 WYHUI',
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}
export default config