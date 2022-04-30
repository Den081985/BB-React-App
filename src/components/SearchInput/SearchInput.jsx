import PropTypes from "prop-types";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import styles from "./SearchInput.module.css";
const SearchInput = ({ value, placeholder, handleInputChange }) => {
  return (
    <>
      <InputGroup className="m-3" style={{ width: 500 }}>
        <FormControl
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          //   aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="success"
          id="button-addon2"
          onClick={() => value && handleInputChange("")}
        >
          Clear
        </Button>
      </InputGroup>
    </>
  );
};

SearchInput.propTypes = {
  text: PropTypes.string,
};

export default SearchInput;
