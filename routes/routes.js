const {Router} = require('express');
const { home, oneContact, contacts } = require('../controllers/routes');


const route = Router();


//Home route
route.get('/', home);

//One contact
route.get('/oneContact', oneContact);

//All data
route.get('/allContacts', contacts);


module.exports = route;