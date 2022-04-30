import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./SearchPageInfo.module.css";
const SearchPageInfo = ({ people }) => {
  return (
    <>
      {people.length ? (
        <ul className={styles.wrapper}>
          {people.map(({ id, name, img }) => (
            <li className={styles.item} key={id}>
              <Link to={`/person/${id}`}>
                <img src={img} alt={name} className={styles.img} />
                <p className={styles.name}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className={styles.comment}>No results, bitch!</h3>
      )}
    </>
  );
};

SearchPageInfo.propTypes = {
  text: PropTypes.string,
};

export default SearchPageInfo;
