import PropTypes from "prop-types";
import styles from "./ChooseTheme.module.css";
import walter from "./image/607643.jpg";
import jesse from "./image/676124.jpg";
import gustavo from "./image/481029.jpg";
import home from "./image/63542.jpg";
import {
  THEME_WALTER,
  THEME_JECCEY,
  THEME_OTHER,
  THEME_GUSTAVO,
} from "../../context/themeProvider";

import { useTheme } from "../../context/themeProvider";

const ChooseThemeItem = ({ text, theme, img }) => {
  const isTheme = useTheme();
  return (
    <div className={styles.item} onClick={() => isTheme.changeTheme(theme)}>
      <div className={styles.text}>{text}</div>
      <img src={img} className={styles.theme_img} alt={text} />
    </div>
  );
};

const ChooseTheme = () => {
  return (
    <div className={styles.container}>
      <ChooseThemeItem
        text={"Walter Theme"}
        theme={THEME_WALTER}
        img={walter}
      />
      <ChooseThemeItem text={"Jecce Theme"} theme={THEME_JECCEY} img={jesse} />
      <ChooseThemeItem
        text={"Gustavo Theme"}
        theme={THEME_GUSTAVO}
        img={gustavo}
      />
      <ChooseThemeItem text={"Default Theme"} theme={THEME_OTHER} img={home} />
    </div>
  );
};

ChooseThemeItem.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  img: PropTypes.string,
};
export default ChooseTheme;
