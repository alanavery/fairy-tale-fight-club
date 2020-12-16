const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

// Set up Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fairyTaleFightClub', {
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

// Add controller
app.use('/auth', require('./controllers/auth'));

app.get('/', (req, res) => {
  res.send(`You've successfully made a GET request to /`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The server is up and running on PORT ${PORT}`);
});
