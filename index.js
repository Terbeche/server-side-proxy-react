const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api', (req, res) => {
  const url = `https://bio.torre.co/api${req.url}`;
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 4000);