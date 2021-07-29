import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./gioHangReducer";

const rootReducer = combineReducers({
  gioHang: gioHangReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
