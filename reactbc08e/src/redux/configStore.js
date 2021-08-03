import { combineReducers, createStore } from "redux";
import { oanTuTiReducer } from "./oanTuTiReducer";
const rootReducer = combineReducers({
  oanTuTiReducer,
});

export const store = createStore(rootReducer);
