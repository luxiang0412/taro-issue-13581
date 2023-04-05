export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/index2/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#8C8C8C',
    selectedColor: '#00706B',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [{
      pagePath: "pages/index/index",
      text: "index1",
      iconPath: './images/footer-01.png',
      selectedIconPath: './images/footer-11.png'
    }, {
      pagePath: "pages/index2/index",
      text: "index2",
      iconPath: './images/footer-02.png',
      selectedIconPath: './images/footer-12.png'
    },]
  },
})
