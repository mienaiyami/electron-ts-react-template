module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: {
    electron: 'commonjs2 electron',
  },
  module: {
    rules: require('./rules.webpack'),
  },
  target: 'electron-renderer'
}