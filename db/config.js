const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.DB_CON;
mongoose.set('strictQuery', false);

const dbConnection = async() => {
    try {
        await mongoose.connect(db);

        console.log('Conectado con base de datos');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error conexión base de datos');
    }
}

module.exports = dbConnection