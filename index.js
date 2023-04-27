const express = require('express');
const routes = require('./routes/contacts');
const path = require('path')
require('dotenv').config(); //To use env. variables
const dbConnection  = require('./config/db.config'); //Database connection



const app = express();
const port = process.env.PORT || 4000;
dbConnection(); //execute db connection


app.use(express.json());
app.use(routes);

app.listen(port, ()=> {
console.log(`Running on port ${port}`);
})