import { combineReducers, createStore } from "redux";
import { burgerReducer } from "./burgerReducer";
import { menuReducer } from "./menuReducer";

const rootReducer = combineReducers({
  burgerReducer: burgerReducer,
  menuReducer: menuReducer
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
