const {Router} = require('express');
const { home, contacts } = require('./controllers/routes');


const route = Router();


//Home route
route.get('/', home);

//All data
route.get('/contacts', contacts);


module.exports = route;