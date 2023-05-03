const mongoose = require('mongoose');
require('dotenv').config(); //To use env. variables

const db = process.env.DB_CON;

const dbConnection = async() => {
    try {
        await mongoose.connect(db);
        console.log('Conected to database');
        
    } catch (error) {
        console.log('DB conection error:\n', error);
    }
}

module.exports = dbConnection