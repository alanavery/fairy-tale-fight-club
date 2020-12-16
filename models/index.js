require('dotenv').config();

// Set up Mongoose
const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGO_URI}/fairyTaleFightClub`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Add Mongoose event listeners
const db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (err) => {
  console.log(`Database error:\n${err}`);
});

module.exports = {
  Fighter: require('./fighter'),
  Battle: require('./battle')
};
