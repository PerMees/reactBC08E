const stateDefault = {
  danhSachGheDangDat: [
    // soGhe, gia
  ],
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_GHE": {
      let danhSachCapNhat = [...state.danhSachGheDangDat];
      let ghe = { soGhe: action.soGhe, gia: action.gia };
      let index = danhSachCapNhat.findIndex(
        (ghedangchon) => ghedangchon.soGhe === ghe.soGhe
      );
      index === -1
        ? danhSachCapNhat.push(ghe)
        : danhSachCapNhat.splice(index, 1);
      state.danhSachGheDangDat = danhSachCapNhat;
      return { ...state };
    }
    case "XOA_VE": {
      let danhSachCapNhat = [...state.danhSachGheDangDat];
      state.danhSachGheDangDat = danhSachCapNhat.filter(
        (ghe) => ghe.soGhe !== action.soGhe
      );
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapDatVeReducer;
