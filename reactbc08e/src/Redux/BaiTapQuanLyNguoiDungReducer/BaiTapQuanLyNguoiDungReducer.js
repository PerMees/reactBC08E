const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      hoTen: "Nguyen Van A",
      matKhau: "123456789",
      email: "nguyenvana@gmail.com",
      soDienThoai: "0909123123",
      maLoaiNguoiDung: "KhachHang",
    },
    {
      taiKhoan: "nguyenvanb",
      hoTen: "Nguyen Van B",
      matKhau: "123456789",
      email: "nguyenvanb@gmail.com",
      soDienThoai: "0909234234",
      maLoaiNguoiDung: "KhachHang",
    },
  ],
  nguoiDungChinhSua: {
    taiKhoan: "",
    hoTen: "",
    matKhau: "",
    email: "",
    soDienThoai: "",
    maLoaiNguoiDung: "",
  },
};

export const BaiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_NGUOI_DUNG": {
      state.mangNguoiDung = [...state.mangNguoiDung, action.user];
      return { ...state };
    }
    case "XOA_NGUOI_DUNG": {
      let mangCapNhat = [...state.mangNguoiDung].filter(
        (user) => user.taiKhoan !== action.taiKhoan
      );
      state.mangNguoiDung = mangCapNhat;
      return { ...state };
    }
    case "CHINH_SUA_NGUOI_DUNG": {
      state.nguoiDungChinhSua = action.nguoiDung;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
