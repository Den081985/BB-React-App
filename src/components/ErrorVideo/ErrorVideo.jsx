import PropTypes from "prop-types";
import styles from "./ErrorVideo.module.css";
const ErrorVideo = ({ video }) => {
  return (
    <video className={styles.video}>
      <source src={video} />
    </video>
  );
};

ErrorVideo.propTypes = {
  src: PropTypes.string,
};

export default ErrorVideo;
