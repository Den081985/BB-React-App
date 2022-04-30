import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./PersonLinkBack.module.css";
const PersonLinkBack = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Button variant="outline-success" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};

PersonLinkBack.propTypes = {
  text: PropTypes.string,
};

export default PersonLinkBack;
