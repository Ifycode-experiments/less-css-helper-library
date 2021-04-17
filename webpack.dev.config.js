const path = require('path');
const config = require('./webpack.config');

config.mode = 'development';

config.devtool = 'inline-source-map';

config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'src'),
  publicPath: '/'
}

module.exports = config;
