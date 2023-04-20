const mongoose = require('mongoose');

const db = process.env.DB_CON;
mongoose.set('strictQuery', false);

const dbConnection = async() => {
    try {
        await mongoose.connect(db);

        console.log('Conected to database');
        
    } catch (error) {
        console.log(error);
        throw new Error('Conection error');
    }
}

module.exports = dbConnection