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
};

export const BaiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
