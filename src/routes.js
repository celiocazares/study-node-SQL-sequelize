const express = require('express');
const UserController = require('./controllers/UserController');
const AddressCoontroller = require('./controllers/AddressController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/addresses', AddressCoontroller.store);

module.exports = routes;