const express = require('express');
const mainRouter = express.Router();
const router = require('./routes');

function routesSetup(app){
    app.use('/api/v1', mainRouter);
    mainRouter.use('/result', router);
}

module.exports = routesSetup;