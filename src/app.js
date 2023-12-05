// Import required modules
const express = require('express');
const Subscriber = require('./models/subscribers');
const path = require('path');
const cors = require('cors');

// Create an instance of express application
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// API to render HTML file
app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, "/index.html"));
});

// API to get all data of subscribers
app.get('/subscribers',async (req, res)=>{
    try {
        let subscribers = await Subscriber.find();
        // Response data
        res.status(200).send(subscribers);
    }
    catch(err) {
        res.status(500).send(err);
    }
});

// API to get names and subscribedChannel of all subscribers
app.get('/subscribers/names',async (req, res)=>{
    try{
        let subscribers = await Subscriber.find(
            {}, 
            { name: 1, subscribedChannel: 1, _id: 0 }
        );
        // Response data
        res.status(200).send(subscribers);    
    }
    catch(err) {
        res.status(500).send(err);
    }
});

// API to get subscribers by id
app.get('/subscribers/:id',async (req, res)=>{
    try{
        let subscribers = await Subscriber.findById(req.params.id);
        // Response data
        res.status(200).send(subscribers);
    }
    catch(err) {
        res.status(400).send({Error_message : "No Subscriber found related to this id"});
    }
});

module.exports = app;
