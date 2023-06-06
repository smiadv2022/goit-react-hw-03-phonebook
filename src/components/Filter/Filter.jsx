import PropTypes from 'prop-types';
import { InputFilter, Label } from './Filter.styled';

export const Filter = ({ value, Input }) => {
  return (
    <>
      <Label htmlFor="find">Find contacts by name:</Label>
      <InputFilter
        type="text"
        name="find"
        placeholder="Search..."
        value={value}
        onChange={Input}
      />
    </>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  Input: PropTypes.func.isRequired,
};
