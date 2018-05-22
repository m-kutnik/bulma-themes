/* eslint-disable */
module.exports = {
  lintOnSave: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.output.publicPath = "./"
    }
  },
}
