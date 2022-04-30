import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import styles from "./PersonInfo.module.css";
const PersonInfo = ({ personInfo }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {personInfo.map(({ title, data }) => (
          <li className={styles.info_item} key={title}>
            <span className={styles.info_title}>
              {title}: {data}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
