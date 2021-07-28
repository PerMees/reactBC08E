import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";

const rootReducer = combineReducers({
  // State ứng dụng được lưu tại đây

  /** gioHangReducer: (state = [], action) => {
    switch (action.type) {
      case "THEM_GIO_HANG": {
        const spGH = { ...action.sanPhamClick, soLuong: 1 };
        let gioHangCapNhat = state;
        let SPGioHang = gioHangCapNhat.find((sp) => sp.maSP === spGH.maSP);
        SPGioHang ? (SPGioHang.soLuong += 1) : gioHangCapNhat.push(spGH);
        return [...gioHangCapNhat];
      }
      case "XOA_GIO_HANG": {
        const gioHang = state;
        const gioHangCapNhat = gioHang.filter(
          (sp) => sp.maSP !== action.maSPClick
        );
        return [...gioHangCapNhat];
      }
      default:
        return state;
    }
  },
  */
  gioHangReducer: gioHangReducer,
});

export const store = createStore(rootReducer);
