module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */
          'primary-color': '#005587',
        },
        javascriptEnabled: true,
      }
    }
  },
}