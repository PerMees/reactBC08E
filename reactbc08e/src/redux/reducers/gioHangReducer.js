export const gioHangReducer = (state = [], action) => {
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
    case "TANG_GIAM_GIO_HANG": {
      let gioHangCapNhat = [...state];
      let spGH = gioHangCapNhat.find((sp) => sp.maSP === action.maSPClick);
      spGH.soLuong += action.soLuong;
      if (spGH.soLuong < 1) {
        alert("Số lượng không được bé hơn 1");
        spGH.soLuong = 1;
      }
      return gioHangCapNhat;
    }
    default:
      return state;
  }
};
