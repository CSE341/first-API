const {Router} = require('express');
const { home, oneContact, contacts, addContact, updateContact, deleteContact } = require('../controllers/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');



const route = Router();

route.use('/doc', swaggerUi.serve);

//Home route
route.get('/', home);

//One contact
route.get('/oneContact/:id', oneContact);

//All data
route.get('/allContacts', contacts);

//Add contact
route.post('/addContact', addContact);

//Update contact
route.put('/updateContact/:id', updateContact);

//Delete Contact
route.delete('/deleteContact/:id', deleteContact);

//API Dcoumentation
route.get('/doc', swaggerUi.setup(swaggerDocument));

module.exports = route;