var express = require('express');
var app = express();
app.set('view engine', 'ejs');


var request = require('request');

var cityList = [];


request("http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&APPID=259faf4a51fb2d5718cb5f8cb002bc31", function(error, response, body) {
   
    cityList.push(JSON.parse(body));
});

app.get('/', function (req, res) {
    res.render('index', {cityList : cityList});
});

app.get('/add', function (req, res) {
	console.log(req.query);
    res.render('index', {cityList : cityList});
});

app.get('/delete', function (req, res) {
    res.render('index', {cityList : cityList});
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});