const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  // 搜索设置
  search: true,
  searchMaxSuggestions: 15,
  authorAvatar: '/author.jpg',
  // 自动形成侧边导航
  sidebar: 'auto',
  valineConfig: {
    appId: '7dIuF5UbkDS2FbsuUTIkcc1Y-gzGzoHsz', // your appId
    appKey: 'OHKIbZ0uxwcrvyo8m2zRHGhb', // your appKey
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true
  }
})
