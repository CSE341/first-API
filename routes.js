const {Router} = require('express');
const { home } = require('./controllers/routes');


const route = Router();


//Home route
route.get('/', home);


module.exports = route;