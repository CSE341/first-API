const {Router} = require('express');


const route = Router();


//Home route
route.get('/', (req, res ) => {
    res.send('I love you Marlen');
});


module.exports = route;