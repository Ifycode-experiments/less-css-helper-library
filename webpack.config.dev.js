import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(_dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(_dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {},
      {test: /\.less$/, loaders: ['style', 'less']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
