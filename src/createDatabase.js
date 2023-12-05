const mongoose = require('mongoose');
const subscriberModel = require('./models/subscribers');
const data = require('./data');

// Configuration of dotenv
require('dotenv').config();

const dburl = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/subscribers";
// Connecting to MongoDB using Mongoose
mongoose.connect(dburl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
const db = mongoose.connection;

// If an error occur during connection, handle and log error
db.on('error', (err) => console.log(err));

// If connection is successful then log success message
db.once('open', () => console.log('Database created...'));

// Refresh all connections
const refreshAll = async () => {
    // Deleting previous data
    await subscriberModel.deleteMany({});
    // Inserting new data
    await subscriberModel.insertMany(data);
    // Disconnecting the database
    await mongoose.disconnect();
}
refreshAll();