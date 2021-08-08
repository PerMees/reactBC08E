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
  nguoiDung: {
    values: {
      taiKhoan: "",
      hoTen: "",
      password: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      password: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "",
    },
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
      state.nguoiDung.values = action.nguoiDung;
      state.nguoiDung = { ...state.nguoiDung };
      return { ...state };
    }
    case "HANDLE_CHANGE_INPUT": {
      state.nguoiDung = action.nguoiDung;
      return { ...state };
    }
    case "CAP_NHAT_NGUOI_DUNG": {
      const mangNguoiDungCapNhat = [...state.mangNguoiDung];
      let nguoiDungCapNhat = mangNguoiDungCapNhat.find(
        (nguoiDung) => nguoiDung.taiKhoan === action.nguoiDungCapNhat.taiKhoan
      );

      if (nguoiDungCapNhat) {
        nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.hoTen;
        nguoiDungCapNhat.matKhau = action.nguoiDungCapNhat.matKhau;
        nguoiDungCapNhat.email = action.nguoiDungCapNhat.email;
        nguoiDungCapNhat.soDienThoai = action.nguoiDungCapNhat.soDienThoai;
        nguoiDungCapNhat.maLoaiNguoiDung =
          action.nguoiDungCapNhat.maLoaiNguoiDung;
      }
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
