var express = require('express');

var app = express();

var artists = [

];

app.get('/', function (req, res) {
  res.send('Hello API');
})

app.listen(3012, function () {
  console.log('API app started');
})