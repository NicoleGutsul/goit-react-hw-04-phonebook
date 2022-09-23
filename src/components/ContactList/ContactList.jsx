import propTypes from 'prop-types';
import ContactItem from "components/ContactItem";
const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>{contacts.map(({ id, name, number }) => (
        <ContactItem 
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={onDeleteContact}
        />
           
       
    ))}
    </ul>
    
);

export default ContactList;
ContactList.propTypes = {
  contacts: propTypes.func.isRequired,
  onDeleteContact: propTypes.func.isRequired,
}.isRequired