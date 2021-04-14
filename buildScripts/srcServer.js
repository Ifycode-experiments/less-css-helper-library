import express from 'express';
import path from 'path';
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();

const compiler = webpack(config);
