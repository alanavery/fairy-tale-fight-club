const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
  winner: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Fighter'
    }
  ],
  loser: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Fighter'
    }
  ]
});

const Battle = mongoose.model('Battle', battleSchema);

module.exports = Battle;
