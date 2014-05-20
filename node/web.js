// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());
var port = Number(process.env.PORT || 5000);

app.get('/', function(req, res) {
  res.send("Retorno TESTE!");
  res.send("Listening on " + port);
  console.log("Listening on " + port);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});