const myContacts = require("../models/contacts");

//home route
const home = (req, res) => {
  res.send("I love you Marlen");
};

//Find a single contact by id
const oneContact = async (req, res) => {
  const id = req.params["id"];

  try {
    const myContact = await myContacts.findOne({ _id: id });

    res.send(
      `<table>
            <tr>
            <th>Contact information</th>
            </tr>
            <tr>
            <td>${myContact.firstName}</td>
            <td>${myContact.lastName} -</td>
            <td>${myContact.email} -</td>
            <td>${myContact.favoriteColor} -</td>
            <td>${myContact.birthday}</td>
            </tr>
        </table>`
    );
  } catch (error) {
    res.send("Ups! something was wrong, please check the route");
    console.log(error);
  }
};

//Find all contacts
const contacts = async (req, res) => {
  try {
    const allContacts = await myContacts.find({});

    let elements = "";
    const head = `<table>
        <tr>
        <th>All contacts information:</th>
        </tr>
        </table>`;
    for (const file of allContacts) {
      elements += `<table>
                <tr>
                <td>${file._id} -</td>
                <td>${file.firstName}</td>
                <td>${file.lastName} -</td>
                <td>${file.email} -</td>
                <td>${file.favoriteColor} -</td>
                <td>${file.birthday}</td>
                </tr>
            </table>`;
    }
    res.send(head + elements);
  } catch (error) {
    res.send("Ups! something was wrong, please check the route");
    console.log(error);
  }
};

//Add a new contact
const addContact = async (req, res) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  try {
    const newContact = new myContacts({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });
    await newContact
      .save()
      .then((savedContact) => {
        res.status(201).json(savedContact);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  } catch (error) {
    console.log(error);
  }
};

//Update especific fields of a contact
const updateContact = async (req, res) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const id = req.params["id"];
  const myContact = await myContacts.findOne({ _id: id });
  if (myContact) {
    try {
      await myContacts.replaceOne({_id: myContact.id}, {
        firstName,
        lastName,
        email,
        favoriteColor,
        birthday
      })
        .then((updatedContact) => {
          res.status(204).json(updatedContact);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    } catch (error) {
      console.log(error);
    }
  }
};

//Deleting a contact by id
const deleteContact = async (req, res) => {
    const id = req.params["id"];
    try {
      await myContacts.findOneAndDelete({ _id: id })
      .then(deletedContact => {
        if (!deletedContact) {
          return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
    } catch (error) {
      
    }
}

module.exports = {
  home,
  oneContact,
  contacts,
  addContact,
  updateContact,
  deleteContact
};
