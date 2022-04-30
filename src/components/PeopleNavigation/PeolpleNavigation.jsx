import PropTypes from "prop-types";
import { useState } from "react";
import { Pagination } from "react-bootstrap";
import styles from "./PeopleNavigation.module.css";
const PeopleNavigation = ({ setPage, page, setOffset }) => {
  const pageCount = Math.floor(62 / 10);

  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  const createPage = (item) => {
    if (item === 1) {
      setPage(item);
      setOffset(0);
    } else {
      setPage(item);
      setOffset(item * 10);
    }
  };
  return (
    <div className={styles.container}>
      <Pagination>
        {pages.map((item) => (
          <Pagination.Item
            key={item}
            onClick={() => createPage(item)}
            active={item === page}
          >
            {item}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

PeopleNavigation.propTypes = {
  text: PropTypes.string,
};

export default PeopleNavigation;
