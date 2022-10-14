import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';
import { v4 as uuid } from 'uuid';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import { Link, Route, Routes } from 'react-router-dom';
import api from '../api/contacts';
import EditContact from './EditContact';

function App() {

  const retreiveContacts = async () => {

    const response = await api.get('/contacts');
    return response.data;


  }

  const storelocal = 'storelocal';
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(storelocal)) ?? []);

  const getContactHandler = async (contact) => {

    const request = { id: uuid(), ...contact };

    const response = await api.post('/contacts', request);


    setContacts([...contacts, response.data])

  }
  const editContactHandler = async (contact) => {



    const response = await api.put(`/contacts/${contact.id}`, contact);

    setContacts(
      contacts.map((contact) => {
        return contact.id === response.data.id ? { ...response.data } : contact;
      })
    );




  }


  useEffect(() => {
    // localStorage.setItem(storelocal, JSON.stringify(contacts))

    const getallContacts = async () => {

      const allcontact = await retreiveContacts();
      if (allcontact)
        setContacts(allcontact);
    }

    getallContacts();


  }, [])

  const removeContact = async (id) => {

    await api.delete(`/contacts/${id}`)


    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  return (
    <div>


      <Header />
      <Link to='/'>HOME</Link>
      <br />
      <Link to='/add_contact'>Add Contact</Link>
      <Routes>
        <Route path='/' exact element={<ContactList contacts={contacts} getcontactId={removeContact} />} />
        <Route path='/add_contact' exact element={<AddContact getContact={getContactHandler} />} />
        <Route path='/edit' exact element={<EditContact editContact={editContactHandler} />} />
      </Routes>

    </div>
  );
}

export default App;
