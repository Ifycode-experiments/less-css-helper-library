import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

/*eslint-disable no-console*/

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Open: http://localhost:${port}`);
    open(`http://localhost:${port}`);
  }
});
