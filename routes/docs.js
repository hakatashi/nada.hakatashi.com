var express = require('express');
var elastic = require('./db');

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

        var text = result.hits.hits[0]._source.text;

        res.render('docs', {
            title: req.params.id,
            text: text
        });
    });
});

module.exports = router;
