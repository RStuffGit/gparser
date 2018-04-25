var express = require('express');
const bodyParser = require("body-parser");
var jsonfile = require('jsonfile');
var file = 'data.json';
var app = express();
var port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/src'); // general config
app.set('view engine', 'html');
app.use("/node_modules", express.static('node_modules'));

app.get('/', function (request, response) {
    response.render('index');
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/save', function (request, response) {
    if (request.body && request.body.length > 0) {
        jsonfile.writeFile(file, request.body, function (err) {
            response.sendStatus(err ? 500 : 200);
        });
    } else {
        response.sendStatus(400);
    }
});
app.use(express.static(__dirname + '/src/public'));

app.listen(port, function (err) {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log('server is listening on' + port)
});