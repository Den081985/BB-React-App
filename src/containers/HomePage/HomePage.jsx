import PropTypes from "prop-types";
import ChooseTheme from "../../components/HomePage/ChooseTheme";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <ChooseTheme />
    </>
  );
};

HomePage.propTypes = {
  text: PropTypes.string,
};

export default HomePage;
