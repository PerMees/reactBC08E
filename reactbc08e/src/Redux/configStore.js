import { combineReducers, createStore } from "redux";
import { BaiTapQuanLyNguoiDungReducer } from "./BaiTapQuanLyNguoiDungReducer/BaiTapQuanLyNguoiDungReducer";

const rootReducer = combineReducers({ BaiTapQuanLyNguoiDungReducer });

export const store = createStore(rootReducer);
