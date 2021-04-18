const path = require('path');

const config = require('./webpack.config');

config.mode = 'production';

config.devtool = 'source-map';

config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
}

module.exports = config;
