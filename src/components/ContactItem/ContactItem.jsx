import propTypes from 'prop-types';
const ContactItem = ({ id, name, number, deleteContact }) => {
    return (
        <li>
            {name}: {number}
            <button type="button" onClick={() => deleteContact(id)}>Delete</button>
        </li>
    );
};

export default ContactItem;

ContactItem.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.number.isRequired,
    deleteContact: propTypes.func.isRequired,
}.isRequired