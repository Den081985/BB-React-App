import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { fetchPerson, getResourses } from "../../utils/network";
import { GET_ALL_PEOPLE } from "../../constants/api";
import SearchInput from "../../components/SearchInput/SearchInput";
import { withErrorApi } from "../../hoc/withErrorApi";
import styles from "./SearchPage.module.css";
import SearchPageInfo from "../../components/SearchPageInfo/SearchPageInfo";
const SearchPage = ({ setErrorApi }) => {
  const [value, setValue] = useState("");
  const [people, setPeople] = useState([]);
  const getResponse = async (url, name) => {
    const res = await fetchPerson(url, name);

    if (res) {
      const searchResult = res.map(({ char_id, name, img }) => {
        return {
          id: char_id,
          name,
          img,
        };
      });
      console.log(res);
      setPeople(searchResult);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  /**
   *debounce(lodash) Создает отмененную функцию, которая откладывает вызов до тех пор, func пока wait не
   * истечет миллисекунды с момента последнего вызова отмененной функции. Функция
   * debounced поставляется с cancelметодом отмены отложенных funcвызовов и flushметодом
   * их немедленного вызова
   * useCallback Возвращает мемоизированный колбэк,который будет обновлен, только если
   *  одна из зависимостей будет изменена.
   */
  //функция задержки запроса на сервер во время ввода инпута
  const debouncedResponce = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setValue(value);
    debouncedResponce(value);
  };
  useEffect(() => {
    getResponse(GET_ALL_PEOPLE, "");
  }, []);
  return (
    <>
      <h3 className={styles.title}>Search, bitch!</h3>
      <SearchInput
        placeholder="Say my name"
        value={value}
        handleInputChange={handleInputChange}
      />
      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  text: PropTypes.string,
};

export default withErrorApi(SearchPage);
