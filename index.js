const express = require('express');
const routes = require('./routes/routes');
const path = require('path')
require('dotenv').config(); //To use env. variables
const dbConnection  = require('./db/config'); //Database connection
const { json } = require('express');



const app = express();
const port = process.env.PORT || 4000;
dbConnection(); //execute db connection


app.use(routes);
app.use(json());

app.listen(port, ()=> {
console.log(`Running on port ${port}`);
})