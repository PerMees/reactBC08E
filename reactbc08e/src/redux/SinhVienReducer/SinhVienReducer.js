const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "Nguyen Van A",
      soDienThoai: "0905123123",
      email: "abcd@gmail.com",
    },
  ],
};

export const SinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
