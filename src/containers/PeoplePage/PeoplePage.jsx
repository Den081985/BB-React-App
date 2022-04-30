import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import PeopleList from "../../components/PeoplePage/PeopleList";
import { withErrorApi } from "../../hoc/withErrorApi";
import { GET_ALL_PEOPLE } from "../../constants/api";
import { fetchData, getResourses } from "../../utils/network";
import styles from "./PeoplePage.module.css";
import PeopleNavigation from "../../components/PeopleNavigation/PeolpleNavigation";
const PeoplePage = ({ setErrorApi }) => {
  //состояние персонажей
  const [people, setPeople] = useState(null);
  //состояние количества элементов

  // const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  console.log(page);
  //функция полyчения данных
  const getData = async (url, limit, offset) => {
    const res = await fetchData(url, limit, offset);
    // console.log(res.length);

    if (res) {
      const peopleList = res.map(({ char_id, name, img }) => {
        return {
          id: char_id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      // setTotalCount(res.length);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  // useEffect(() => {
  //   getData(GET_ALL_PEOPLE, 10, 0);
  // }, []);
  useEffect(() => {
    getData(GET_ALL_PEOPLE, limit, offset);
  }, [limit, offset]);
  return (
    <Fragment>
      <PeopleNavigation setPage={setPage} page={page} setOffset={setOffset} />
      {people && <PeopleList people={people} />}
    </Fragment>
  );
};

PeoplePage.propTypes = {
  text: PropTypes.string,
};

export default withErrorApi(PeoplePage);
