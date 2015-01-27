var express = require('express');
var elasticsearch = require('elasticsearch');

var elastic = new elasticsearch.Client({
    host: 'localhost:9200'
});

var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
