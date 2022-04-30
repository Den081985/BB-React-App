import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";
const Header = () => {
  const [count, setCount] = useState(0);
  const storeData = useSelector((state) => state.favouriteReducer);
  // console.log(storeData);
  useEffect(() => {
    const length = Object.keys(storeData).length;
    // console.log(length);
    setCount(length);
  });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Breaking Bad</div>
        <ul className={styles.list__container}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/people"}>People</NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>Search</NavLink>
          </li>
          <li>
            <NavLink to={"/favourites"}>Favourites {count}</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
