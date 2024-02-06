//mongoose schema Game
const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    player1: String,
    player2: String,
    boardWidth: { type: Number, required: true },
    boardHeight: { type: Number, required: true },
    state: { type: String, required: true }
});

module.exports = mongoose.model('Game', gameSchema);