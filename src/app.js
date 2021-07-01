const express = require('express');
const app = express();
const { Cat } = require('./models');
app.use(express.json());


app.post('/cats', (res, req) => {
    Cat.create(req.body).then(cat => res.statusCode(201).json(cat))

});


module.exports = app;