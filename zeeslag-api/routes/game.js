var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Game = mongoose.model('Game');

/* GET home page. */
router.get('/', function(req, res, next) {
    //list all games
    Game.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;
