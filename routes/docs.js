var express = require('express');
var elasticsearch = require('elasticsearch');

var elastic = new elasticsearch.Client({
    host: 'localhost:9200'
});

var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res, next) {
    elastic.search({
        index: 'nada',
        type: 'print',
        body: {
            query: {
                filtered: {
                    filter: {
                        term: {
                            id: req.params.id
                        }
                    }
                }
            }
        }
    }, function (error, result) {
        if (error) return next(error);
        if (result.hits.hits.length === 0) return next();

        res.send(result.hits.hits[0]._source.text);
    });
});

module.exports = router;
