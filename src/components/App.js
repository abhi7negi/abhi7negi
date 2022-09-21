import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';
import { v4 as uuid } from 'uuid';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {

  const storelocal = 'storelocal';
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(storelocal)) ?? []);

  const getContactHandler = (contact) => {

    setContacts([...contacts, { id: uuid(), ...contact }])

  }

  useEffect(() => {
    localStorage.setItem(storelocal, JSON.stringify(contacts))
  }, [contacts])

  const removeContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  return (
    <div>
      <Header />
      <AddContact getContact={getContactHandler} />
      <ContactList contacts={contacts} getcontactId={removeContact} />
    </div>
  );
}

export default App;
