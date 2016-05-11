var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static('./'));
app.use(express.static('images'));
app.use(express.static('/assets'));
var game = './game.html';

app.get('/game', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile(game, "utf8", function (err, data) {
        if (err) throw err;
        res.write(data);
        console.log('got game!');
        res.end();
    });
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host);
    console.log('Example app listening at http://%s:%s', host, port);
});

app.use(function (req, res, next) {
    console.log('cant get something');
    res.status(404).send('Sorry cant find that!');
});
