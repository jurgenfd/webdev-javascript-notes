//mongoose schema Game
const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    player1: String,
    player2: String,
    boardWidth: { type: Number, required: true },
    boardHeight: { type: Number, required: true },
    state: { type: String, required: true },
    player1board: { type: mongoose.Schema.Types.Mixed },
    player2board: { type: mongoose.Schema.Types.Mixed },
    player1Shots: [{ x: { type: Number }, y: { type: Number} }],
    player2Shots: [{ x: { type: Number }, y: { type: Number} }],
    currentPlayer: { type: String },
    winner: { type: String }
});

module.exports = mongoose.model('Game', gameSchema);