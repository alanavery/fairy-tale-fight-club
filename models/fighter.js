const mongoose = require('mongoose');

const fighterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    species: String,
    weapons: [weaponSchema],
    territory: String,
    heightCm: Number,
    weightKg: Number,
    allies: [allySchema]
  },
  {
    timestamps: true
  }
);

const weaponSchema = new mongoose.Schema({
  name: String,
  magical: Boolean
});

const allySchema = new mongoose.Schema({
  name: String,
  species: String,
  secretWeapon: String
});

fighterSchema.methods.hypeUp = function () {
  return `Ready to kick some fairy tale ass, ${this.name}?!`;
};

const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;
