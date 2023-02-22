var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

app.get('/', function(req, res, next) {
  const fs = require('fs');
  let jsonData = fs.readFileSync('kanji.json');
  let data = JSON.parse(jsonData);
  let dataRecord = data.data;
  res.render('homePage', { title: 'Kanji List', data: dataRecord });
});
