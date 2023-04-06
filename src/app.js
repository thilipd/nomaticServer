// Importing modules

const express = require('express');
const { config } = require('dotenv');
const { resolve } = require('path');
const middleware = require('./middleware');
const routes = require('./routes')

// creating express app server
const app = express();

// Allows to get data from .env file
config({ path: resolve(__dirname, '../.env') });


// middleware
middleware(app);

// routes
routes(app);


app.use("/", (req, res) => {
    res.send("Hello world")
})

module.exports = app;