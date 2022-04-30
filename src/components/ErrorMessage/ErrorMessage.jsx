import ErrorVideo from "../ErrorVideo/ErrorVideo";
import video from "./video/3133.gif";
import styles from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return (
    <div className={styles.video}>
      <ErrorVideo video={video} />
    </div>
  );
};

export default ErrorMessage;
