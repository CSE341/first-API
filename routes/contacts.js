const {Router} = require('express');
const { home, oneContact, contacts, addContact, updateContact, deleteContact } = require('../controllers/routes');
bodyParser = require('body-parser').json();


const route = Router();


//Home route
route.get('/', home);

//One contact
route.get('/oneContact/:id', oneContact);

//All data
route.get('/allContacts', contacts);

//Add contact
route.post('/addContact', bodyParser, addContact);

//Update contact
route.put('/updateContact/:id', bodyParser, updateContact);

//Delete Contact
route.delete('/deleteContact/:id', deleteContact);

module.exports = route;