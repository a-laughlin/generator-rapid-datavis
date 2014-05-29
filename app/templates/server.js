var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

app.use('/',express.static('./static/app/'));


app.get('/data', function(req, res){
  // CSP headers
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "X-Requested-With");
  // response
  res.send({ x: 12, y: 34, r: 5 });
});

app.listen(8000);
