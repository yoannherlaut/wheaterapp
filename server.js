var express = require('express');
var app = express();
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render('index.ejs');
    console.log("page chargée");
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});