import { combineReducers, createStore } from "redux";
import { SinhVienReducer } from "./SinhVienReducer/SinhVienReducer";

const rootReducer = combineReducers({
  SinhVienReducer,
});

export const store = createStore(rootReducer);
