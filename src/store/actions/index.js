import { ADD_TO, REMOVE_FROM } from "../types";

export const addToFavourite = (person) => {
  return {
    type: ADD_TO,
    payload: person,
  };
};

export const removeFromFavourite = (personId) => {
  return {
    type: REMOVE_FROM,
    payload: personId,
  };
};
