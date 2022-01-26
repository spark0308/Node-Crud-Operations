const express = require('express');
const route = express.Router();

const controller = require('../controller/controller');

route.get('/', (req, res) => {
    res.send("Hello World");
})

route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route