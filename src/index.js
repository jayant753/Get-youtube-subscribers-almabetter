// Import required modules
const express = require('express');
const app = require('./app.js');
const mongoose = require('mongoose');

// Configuration of dotenv
require('dotenv').config();
const port = process.env.PORT || 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const dburl = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/subscribers";
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
module.exports = app.listen(port, () => console.log(`App listening on port ${port}!`));
