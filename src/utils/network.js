import axios from "axios";
// import { GET_ALL_PEOPLE } from "../constants/api";
//функция запроса данных
export const getResourses = async (url) => {
  try {
    const responce = await fetch(url);

    if (!responce.ok) {
      console.error(responce.status);
      return false;
    }
    return responce.json();
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const fetchData = async (url, limit, offset) => {
  const { data } = await axios.get(url, {
    params: {
      limit,
      offset,
    },
  });
  return data;
};
export const fetchPerson = async (url, name) => {
  const { data } = await axios.get(url, {
    params: {
      name,
    },
  });
  return data;
};
