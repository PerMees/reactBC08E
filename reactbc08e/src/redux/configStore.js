import { createStore, combineReducers } from "redux";
import { xucXacReducer } from "./GameXucXac/XucXacReducer";

const rootReducer = combineReducers({
  xucXacReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
