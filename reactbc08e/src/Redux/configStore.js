import { createStore, combineReducers } from "redux";
import { sinhVienReducer } from "./sinhVienReducer/sinhVienReducer";

const rootReducer = combineReducers({
  sinhVienReducer,
});

export const store = createStore(rootReducer);
