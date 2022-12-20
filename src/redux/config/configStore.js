import { createStore } from "redux";
import { combineReducers } from "redux";
import TodoS from "../modules/TodoS";

const rootReducer = combineReducers({
  TodoS,
});
const store = createStore(rootReducer);

export default store;
