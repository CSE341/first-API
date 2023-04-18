const myContacts = require('../models/contacts');

//home route
const home = (req, res) => {
    res.send('I love you Marlen');
}

const contacts = async(req, res) => {

    const allContacts = await myContacts.find({});

    let elements = '';
    const head =
    `<table>
    <tr>
    <th>Contacts information:</th>
    </tr>
    </table>`;
    for (const file of allContacts){
        elements += 
        `<table>
            <tr>
            <td>${file.firstName}</td>
            <td>${file.lastName} -</td>
            <td>${file.email} -</td>
            <td>${file.favoriteColor} -</td>
            <td>${file.birthday}</td>
            </tr>
        </table>`
    }
    res.send(head + elements);
}


module.exports = {
    home, contacts
}