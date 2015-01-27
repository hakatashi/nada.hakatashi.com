var express = require('express');
var elastic = require('./db');

var router = express.Router();

router.get('/', function (req, res, next) {
    var query = req.query.q;
    if (!query) return res.redirect('./');

    elastic.search({
        index: 'nada',
        type: 'print',
        body: {
            query: {
                query_string: {
                    default_field: 'text',
                    query: req.query.q
                }
            }
        }
    }, function (error, result) {
        if (error) return next(error);

        res.render('search', {
            query: query,
            title: 'Search: ' + query,
            result: result
        });
    });
});

module.exports = router;
