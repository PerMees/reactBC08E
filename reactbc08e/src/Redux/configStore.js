import { combineReducers, createStore } from "redux";
import BaiTapDatVeReducer from "./BaiTapDatVeReducer/BaiTapDatVeReducer";

const rootReducer = combineReducers({
  BaiTapDatVeReducer,
});

export const store = createStore(rootReducer);
