var express = require('express');
var town = require('./Town.js');

var hostname = '192.168.1.101';
var port = 3000;

var app = express();

var router = express.Router();

router.route('/')
.all(function (req, res) {
    res.json({
        message: "Welcome to api", method: req.method
    });
})

router.route('/towns')
.get(function (req, res) {
    res.json({
        town: town.town(), method: req.method
    });
})

.post(function (req, res) {
    res.json({
        message: "Add a town to list", method: req.method
    });
})

.put(function (req, res) {
    res.json({
        message: "Update info on town", method: req.method
    });
})

.delete(function (req, res) {
    res.json({
        message: "Delete a town from list", method: req.method
    })
});

app.use(router);



app.listen(port, hostname, function () {
    console.log("Server listen on http://" + hostname + ":" + port + "\n");
});