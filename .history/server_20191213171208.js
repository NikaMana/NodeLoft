var express = require('express');

var app = express();

var artists = [
  {
    id: 1,
    name: 'Metallica'
  },
  {
    id: 2,
    name: ''
  }
];

app.get('/', function (req, res) {
  res.send('Hello API');
})

app.listen(3012, function () {
  console.log('API app started');
})