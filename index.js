var express = require('express');
var port = 3000;

var app = express();

app.use(express.static('public'));
app.use(express.static('api'));
app.listen(port);

console.log('Listening on ' + port);
