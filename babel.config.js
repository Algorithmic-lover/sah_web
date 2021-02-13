module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 以下内容为新增部分,按需引入配置
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
