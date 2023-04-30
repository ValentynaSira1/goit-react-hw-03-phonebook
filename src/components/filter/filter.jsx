import PropTypes from 'prop-types';
import css from './filter.module.css'

export const Filter = ({ handleChange, value }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input type="tel" name="filter" onChange={handleChange} className={css.input} value={value}/>
    </label>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};