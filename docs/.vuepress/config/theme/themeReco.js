module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    }
  },
  friendLink: [
    {
      title: '期待ing',
      desc: '一个值得关注的Python打怪升级的学习号',
      email: '909061560@qq.com',
      link: '/views/python/python_seven.html'
    },
    {
      title: '虚位以待',
      desc: 'A simple and beautiful',
      // avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: '/views/python/python_seven.html'
    }
  ],
  logo: '/favicon.jpg',
  // 最后更新时间
  lastUpdated: '上次更新', // string | boolean
  // 作者
  author: 'wy',
  // 备案号
  record: '是yi不是qi',
  recordLink: '',
  // 项目开始时间
  startYear: '2022-2023'
}
