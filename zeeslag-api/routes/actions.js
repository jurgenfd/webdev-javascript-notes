var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Game = mongoose.model('Game');

/* GET home page. */
router.post('/game/:id/board/:username', async function(req, res, next) {
    
    //check if board is an array of arrays
    if(!req.body.board || !Array.isArray(req.body.board) || !Array.isArray(req.body.board[0]) || req.body.board[0].length === 0)
    {
        return res.status(400).json({ message: 'field "board" is required' });
    }

    //list all games
    const game = await Game.findById(req.params.id);

    if (!game)
    {
        return res.status(404).json({ message: 'game not found' });
    }

    if(game.state !== 'setup')
    {
        return res.status(400).json({ message: 'game is not in setup state' });
    }

    //check if board is an array of arrays with the same dimensions as the game
    if(req.body.board.length !== game.boardHeight || req.body.board[0].length !== game.boardWidth)
    {
        return res.status(400).json({ message: 'field "board" has invalid dimensions' });
    }

    //validate if the board contains enough ships
    const ships = {
        'V': 6 * 1,
        'S': 4 * 2,	
        'O': 3 * 3,
        'P': 2 * 4,
        "0": game.boardHeight * game.boardWidth - (6 * 1 + 4 * 2 + 3 * 3 + 2 * 4) //empty cells
    }

    //for every cell in board count each letter 
    let counts = {};
    for (let row of req.body.board)
    {
        for (let cell of row)
        {
            //if cell is type of string, to upper case
            if (typeof cell === 'string')
                cell = cell.toUpperCase();
            counts[cell] = (counts[cell] || 0) + 1;
        }
    }

    console.log(counts)

    //check if the board contains enough ships
    for (let ship in ships)
    {
        console.log(counts[ship])
        if (counts[ship] !== ships[ship])
        {
            return res.status(400).json({ message: 'field "board" has invalid ships or empty cells' });
        }
    }

    const username = req.params.username;
    if(game.player1 == username)
    {
        game.player1board = req.body.board;
    }
    else if(game.player2 == username)
    {
        game.player2board = req.body.board;
    }
    else
    {
        return res.status(400).json({ message: 'User not in game' });
    }

    //check if both boards are set
    if(game.player1board && game.player2board)
    {
        game.state = 'playing';

        //random player 1 or player 2
        game.currentPlayer = Math.random() < 0.5 ? game.player1 : game.player2;
    }

    result = await game.save();

    res.status(200).json(req.body.board);
    
})

router.get('/game/:id/board/:username', async function(req, res, next) {
    
    const username = req.params.username;
    const id = req.params.id;

    //find game
    const game = await Game.findById(id);

    if (!game)
    {
        return res.status(404).json({ message: 'game not found' });
    }

    if(game.player1 == username)
    {
        return res.status(200).json(game.player1board);
    }
    else if(game.player2 == username)
    {
        return res.status(200).json(game.player2board);
    }
    else
    {
        return res.status(400).json({ message: 'User not in game' });
    }
});

router.post('/game/:id/player/:username/shot', async function(req, res, next) {

    const username = req.params.username;
    const id = req.params.id;

    //find game
    const game = await Game.findById(id);

    if (!game)
    {
        return res.status(404).json({ message: 'game not found' });
    }

    if(game.state !== 'playing')
    {
        return res.status(400).json({ message: 'game is not in playing state' });
    }

    //check if it's the player's turn
    if(game.currentPlayer !== username)
    {
        return res.status(400).json({ message: 'not your turn' });
    }


    //check if shot is valid
    if(req.body.x == undefined || !req.body.y == undefined)
    {
        return res.status(400).json({ message: 'field "x" and "y" are required' });
    }

    if(req.body.x < 0 || req.body.x >= game.boardWidth || req.body.y < 0 || req.body.y >= game.boardHeight)
    {
        return res.status(400).json({ message: 'field "x" and "y" are out of bounds' });
    }

    //add shot to player1Shots or player2Shots
    if(game.player1 == username)
    {
        game.player1Shots.push({ x: req.body.x, y: req.body.y });
    }
    else if(game.player2 == username)
    {
        game.player2Shots.push({ x: req.body.x, y: req.body.y });
    }
    else
    {
        return res.status(400).json({ message: 'User not in game' });
    }    

    let board = game.player1 == username ? game.player2board : game.player1board;

    let lastShotHit = false;

    //check if last shot hit a ship
    if(board[req.body.y][req.body.x] !== '0')
    {
        lastShotHit = true;
    }

    //check if all ships are sunk
    let shots = game.player1 == username ? game.player1Shots : game.player2Shots;

    //count nr of shots that hit a ship, if it's equal to the total nr of ships, then all ships are sunk
    let totalNrOfShips = 6 * 1 + 4 * 2 + 3 * 3 + 2 * 4;
    let hits = 0;
    for (let shot of shots)
    {
        if(board[shot.y][shot.x] !== '0')
        {
            hits++;
        }
    }

    if(hits === totalNrOfShips)
    {
        game.state = 'finished';
        game.winner = username;
    }
    else
    {
        game.currentPlayer = game.currentPlayer === game.player1 ? game.player2 : game.player1;
    }

    result = await game.save();

    res.status(200).json({ hit: lastShotHit, winner: game.winner ?? null });


});


module.exports = router;