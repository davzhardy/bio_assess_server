const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () =>
  console.log(`Listening on port ${port}`) //eslint-disable-line no-console
);
