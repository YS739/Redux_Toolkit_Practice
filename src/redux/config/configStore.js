import { createStore } from "redux";
import { combineReducers } from "redux";
import TodoSlice from "../modules";

const rootReducer = combineReducers({
  TodoSlice,
});
const store = createStore(rootReducer);

export default store;
