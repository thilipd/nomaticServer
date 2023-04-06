const taskRoute = require('../components/task/routes')
const router = (app) => {

    // Api for CRUD operation
    app.use('/api/v1', taskRoute);

    // Api for testing the connection
    app.get('/test', (req, res) => {
        res.send('test');
    })
}


module.exports = router;