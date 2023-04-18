const { Schema, model } = require('mongoose');

const ContactSchema = Schema({
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    favoriteColor: {
        type: String,
        required: true
    }, 
    birthday: {
        type: String,
        required: true
    }
}
);

module.exports = model('Contacto', ContactSchema);