var express = require('express');

var app = express();

var artists = [
  {
    id: 1,
    name: 'Metallica'
  },
  {
    id: 2,
    name: 'Iron Maden'
  },
  {
    id: 3,
    name: 'Deep Purple'
  }
];

app.get('/', function (req, res) {
  res.send('Hello API');
})

app.get('/artists', function (req, res) {
  res.send('artists');

app.listen(3012, function () {
  console.log('API app started');
})