var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


var request = require('request');

var cityList = [];


app.get('/', function (req, res) {
    res.render('index', {cityList : cityList});
});

app.get('/add', function (req, res) {
	
if (req.query.ville.length > 0) {
	request("http://api.openweathermap.org/data/2.5/weather?q="+req.query.ville+"&lang=fr&units=metric&APPID=259faf4a51fb2d5718cb5f8cb002bc31", function(error, response, body) {
   
    cityList.push(JSON.parse(body));
    res.render('index', {cityList : cityList});
})
}

});


app.get('/delete', function (req, res) {
console.log(req.query.i);
	cityList.splice(req.query.i, 1);
    res.render('index', {cityList : cityList});
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});