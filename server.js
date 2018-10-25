const express = require('express');
const crawler = require('./src/utilities/crawler.js');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/crawl', (req, res) => {

  crawler.startCrawling();
  res.send("crawling");
});

app.listen(port, () => console.log(`Listening on port ${port}`));