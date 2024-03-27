const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [path.resolve(__dirname, ''), 'node_modules']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    })
  ]
}
