import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./PeopleList.module.css";
const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list_container}>
      {people.map(({ id, name, img }) => (
        <li key={id} className={styles.list_item}>
          <Link to={`/person/${id}`}>
            <img src={img} alt={name} className={styles.person_photo} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
