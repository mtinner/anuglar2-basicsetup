'use strict';
let express = require('express'),
    bodyParser = require('body-parser'),
    app = module.exports.app = exports.app = express(),
    compression = require('compression');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(compression());

app.get('/favicon.ico', function(req, res) {
    res.sendFile(__dirname + '/favicon.ico');
});
app.get('/manifest.json', function(req, res) {
    res.sendFile(__dirname + '/manifest.json');
});


//removeIf(production)
app.use('/frontend', express.static(__dirname + '/frontend'));
app.use('/node_modules/@angular', express.static('node_modules/@angular'));
app.use('/node_modules/rxjs', express.static('node_modules/rxjs'));
app.use(require('connect-livereload')());
//endRemoveIf(production)

//removeIf(development)
app.use('/images', express.static('%%location%%images'));
app.use('/styles', express.static('%%location%%styles'));
app.use('/scripts', express.static('%%location%%scripts'));
app.use('/fonts', express.static('%%location%%fonts'));
//endRemoveIf(development)

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


let port = 8080;
app.listen(port);
console.log('API listening on port ' + port + ' ...');
