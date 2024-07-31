// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT ;

// Middleware
app.use(cors());
app.use(express.json());

const userRoutes = require('./src/routes/userRoutes');
const tournamentRoutes = require('./src/routes/tournamentRoutes');

// Use routes
app.use(userRoutes);
app.use(tournamentRoutes);

// Connect to database
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
