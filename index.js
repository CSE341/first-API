const express = require('express');
const routes = require('./routes');
const path = require('path')
require('dotenv').config(); //To use env. variables



const app = express();


app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, ()=> {
console.log('Running on port 3000');
})