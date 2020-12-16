const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

// Controller
app.use('/fighters', require('./controllers/fighters'));
app.use('/battles', require('./controllers/battles'));

// Home route
app.get('/', (req, res) => {
  res.send(`You've successfully made a GET request to /`);
});

// Listen method
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`The server is up and running on PORT ${PORT}`);
});
