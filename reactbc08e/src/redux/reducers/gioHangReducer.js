export const gioHangReducer = (state = [], action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangCapNhat = [...state];
      let spGH = { ...action.payload, soLuong: 1 };
      let spGioHang = gioHangCapNhat.find((sp) => sp.maSP === spGH.maSP);
      spGioHang ? (spGioHang.soLuong += 1) : gioHangCapNhat.push(spGH);
      return gioHangCapNhat;
    }
    case "XOA_GIO_HANG": {
      return state.filter((sp) => sp.maSP !== action.payload);
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHangCapNhat = [...state];
      let spGH = gioHangCapNhat.find((sp) => sp.maSP === action.maSP);
      spGH.soLuong += action.soLuong;
      if (spGH.soLuong < 1) {
        alert("Số lượng sản phẩm không thể bé hơn 1");
        spGH.soLuong = 1;
      }
      return gioHangCapNhat;
    }
    default:
      return state;
  }
};
