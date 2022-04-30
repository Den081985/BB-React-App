import PropTypes from "prop-types";
import styles from "./PersonOccupation.module.css";
const PersonOccupation = ({ occupation }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.list_title}>Occupation</p>
      <ul className={styles.list_container}>
        {occupation.map((item, index) => (
          <li key={index} className={styles.list_item}>
            <span className={styles.list_name}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

PersonOccupation.propTypes = {
  occupation: PropTypes.array,
};

export default PersonOccupation;
