import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./Reducers";
import thunk from "redux-thunk";
import { putLocalStorage } from "../utils/LocalStorage";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
//subscribe подписывается наизменение store и с помощью getState получает состояния
store.subscribe(() => {
  const state = store.getState().favouriteReducer;
  putLocalStorage("store", state);
});
export default store;
