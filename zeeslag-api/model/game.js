//mongoose schema Game
const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    player1: { 
        email: { type: String, required: true },
        nickname: { type: String, required: true },
    },
    player1: { 
        email: { type: String, required: true },
        nickname: { type: String, required: true },
    },
    state: { type: String, required: true }
});

module.exports = mongoose.model('Game', gameSchema);