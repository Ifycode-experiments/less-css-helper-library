import express from 'express';
import path from 'path';
import open from 'open';
import { port, portUrl, openPort } from './customize/chalk';

import webpack from 'webpack';
import config from '../webpack.dev.config';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

/*eslint-disable no-console*/

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(openPort);
    open(portUrl);
  }
});
