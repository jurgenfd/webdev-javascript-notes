var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Game = mongoose.model('Game');

/* GET home page. */
router.get('/game', function(req, res, next) {
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

router.post('/game', async function(req, res, next) {

    //validate
    if (!req.body.player1 || req.body.player1.toUpperCase() === 'AI')
    {
        return res.status(400).json({ message: 'field "player1" is required and cannot be AI' });
    }

    const player1 = req.body.player1.toLowerCase();
    const boardWidth = req.body.boardWidth ?? 10;
    const boardHeight = req.body.boardHeight ?? 10;
    const player2 = req.body.opponentIsAI ? 'AI' : undefined

    const game = new Game({
        _id: new mongoose.Types.ObjectId(),
        player1: player1,
        player2: player2,
        boardWidth: boardWidth,
        boardHeight: boardHeight,
        state: player2 ? 'setup' : 'waiting'
    });

    result = await game.save();

    res.status(201).json(result);

})

router.delete('/player/:username/game/:gameId', async function(req, res, next) {

    const username = req.params.username;
    const id = req.params.gameId;

    //find game
    const game = await Game.findById(id);

    if (!game || game.player1 !== username)
    {
        return res.status(404).json({ message: 'game not found' });
    }

    result = await Game.deleteOne({ _id: id }).exec()
    res.status(200).json(result);
})

router.get('/player/:username/game', async function(req, res, next) {

    const username = req.params.username.toLowerCase();

    //find all games where player1 or player2 is username
    const games = await Game.find({ $or: [{ player1: username }, { player2: username }] });

    res.status(200).json(games);
})

router.post('/game/:gameId/players', async function(req, res, next) {

    if (!req.body.player2 || req.body.player2.toUpperCase() === 'AI')
    {
        return res.status(400).json({ message: 'field "player2" is required and cannot be AI' });
    }

    const id = req.params.gameId;
    const player2 = req.body.player2.toLowerCase();

    const game = await Game.findById(id);

    if(!game){
        return res.status(404).json({ message: 'game not found' });
    }

    if (game.player1 == player2 || game.state !== 'waiting')
    {
        return res.status(404).json({ message: 'Cannot join this game' });
    }

    game.player2 = player2;
    game.state = 'setup';
    result = await game.save();

    res.status(200).json(result);
})

router.post

module.exports = router;
