import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';


export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('')

  const addContacts = ({ name, number}) => {
    const normalizedName = name.toLowerCase();
    let isAdded = false;

    contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);
        isAdded = true;

      }
    });

    if (isAdded) {
      return
    };

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prev => [...prev, contact]);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
       contact.name.toLowerCase().includes(normalizedFilter)
       );
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const changeFilter = e => {
    setFilter(e.target.value);
  };


    return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts}/>
      <h2>Contacts</h2>
      <Filter 
        value={filter} 
        onChange={changeFilter}/>
      <ContactList 
        contacts={getFilteredContacts()} 
        onDeleteContact={deleteContact}/>    
    </>
    );
};
