import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import PeopleList from "../../components/PeoplePage/PeopleList";
import styles from "./FavouritePage.module.css";
const FavouritePage = () => {
  const [people, setPeople] = useState([]);

  const storeData = useSelector((state) => state.favouriteReducer);

  /**
   * Object.entries() метод возвращает массив собственных перечисляемых свойств указанного
   *  объекта в формате [key, value]
   */
  useEffect(() => {
    const array = Object.entries(storeData);
    // console.log(array);
    // console.log(people.length);
    if (array.length) {
      const response = array.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      setPeople(response);
    }
  }, []);
  return (
    <>
      <h2 className={styles.title}>Favourites</h2>
      {people.length ? (
        <div>
          <h3 className={styles.title}>There is nothing here, bitch!</h3>
          <ErrorMessage />
        </div>
      ) : (
        <PeopleList people={people} />
      )}
    </>
  );
};

FavouritePage.propTypes = {
  text: PropTypes.string,
};

export default FavouritePage;
