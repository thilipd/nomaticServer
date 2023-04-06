const mongoose = require('mongoose');

const url = process.env.MONGO_DB_URL;


//Creating DB

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Connecting Mongo DB to server

const dbConfig = mongoose.connection;


module.exports = dbConfig;