// Importing modules

const { createServer } = require('http');
const app = require('./app');
const dbConfig = require('./dbConfig')

// creating server

const server = createServer(app);


const port = process.env.PORT || 8005;

// connecting the server

(async () => {
    server.listen(port, () => {
        console.log("Server is running on " + port);
    });

    dbConfig.on('error', () => console.log('Mongo not connected'));

    dbConfig.on('connected', () => console.log('Mongo connected'));
})();



