module.exports = {
  title: '啦啦啦啦',
  description: 'wuwu',
  dest: './dist',
  port: '7777',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    ['script', { charset: 'utf-8', src: '/js/main.js' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"),
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    logo: '/img/logo.png',
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}
