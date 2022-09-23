import propTypes from 'prop-types';
const Filter = ({value, onChange}) => (
    <label>
        <p>Find contacts by name </p> 
        <input type="text" value={value} onChange={onChange}/>
    </label>
);

export default Filter;

Filter.propTypes ={
    value: propTypes.exact({
        contacts: propTypes.array.isRequired,
        filter: propTypes.string.isRequired,
    }),
    onChange: propTypes.func.isRequired,
}.isRequired