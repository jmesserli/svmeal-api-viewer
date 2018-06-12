let MonacoPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new MonacoPlugin({
        languages: ['json']
      })
    ]
  }
}