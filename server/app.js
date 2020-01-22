const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

app.use(require("./routes"));
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
