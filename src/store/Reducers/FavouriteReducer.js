import { ADD_TO, REMOVE_FROM } from "../types";
import { omit } from "lodash";
import { getLocalStorage } from "../../utils/LocalStorage";

/**
 * omit(lodash)этот метод создает объект, состоящий из собственных и унаследованных
 * перечисляемых путей свойств object, которые не опущены.Удаляет из объекта свойства(ключ),
 * указанные вторым параметром.
 */
const initialState = getLocalStorage("store");

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_FROM:
      return omit(state, [action.payload]);

    default:
      return state;
  }
};
export default favouriteReducer;
