const stateDefault = {
  mangSinhVien: [
    {
      ma: "1",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "0901123123",
      email: "nguyenvana@gmail.com",
    },
    {
      ma: "2",
      hoTen: "Trần Văn B",
      soDienThoai: "0901234234",
      email: "tranvanb@gmail.com",
    },
    {
      ma: "3",
      hoTen: "Lê Văn C",
      soDienThoai: "0901345345",
      email: "levanc@gmail.com",
    },
    {
      ma: "4",
      hoTen: "Nguyễn Văn D",
      soDienThoai: "0901456456",
      email: "nguyenvand@gmail.com",
    },
    {
      ma: "5",
      hoTen: "Trần Văn E",
      soDienThoai: "0901567567",
      email: "tranvane@gmail.com",
    },
    {
      ma: "6",
      hoTen: "Lê Văn F",
      soDienThoai: "0901678678",
      email: "levanf@gmail.com",
    },
    {
      ma: "7",
      hoTen: "Nguyễn Văn G",
      soDienThoai: "0901789789",
      email: "nguyenvang@gmail.com",
    },
    {
      ma: "8",
      hoTen: "Trần Văn H",
      soDienThoai: "0901321321",
      email: "tranvanh@gmail.com",
    },
    {
      ma: "9",
      hoTen: "Lê Văn I",
      soDienThoai: "0901432432",
      email: "levani@gmail.com",
    },
  ],
  sinhVien: {
    ma: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
  },
  mangTimKiem: [],
  noiDungTimKiem: "",
  mangKetQuaTimKiem: [],
};

export const sinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      let mangSinhVienCapNhat = [...state.mangSinhVien];
      mangSinhVienCapNhat.push(action.sv.values);
      state.mangSinhVien = mangSinhVienCapNhat;
      return { ...state };
    }
    case "XOA_SV": {
      let mangSinhVienCapNhat = [...state.mangSinhVien].filter(
        (sv) => sv.ma !== action.ma
      );
      state.mangSinhVien = mangSinhVienCapNhat;
      return { ...state };
    }
    case "SUA_SV": {
      let sinhVienCapNhat = [...state.mangSinhVien].find(
        (sv) => sv.ma === action.ma
      );
      state.sinhVien = sinhVienCapNhat;
      return { ...state };
    }
    case "HOAN_THANH_SUA_SINH_VIEN": {
      let mangSinhVienCapNhat = [...state.mangSinhVien];
      let sinhVienCapNhat = mangSinhVienCapNhat.find(
        (sv) => sv.ma === action.sv.ma
      );
      if (sinhVienCapNhat) {
        sinhVienCapNhat.hoTen = action.sv.hoTen;
        sinhVienCapNhat.soDienThoai = action.sv.soDienThoai;
        sinhVienCapNhat.email = action.sv.email;
      }
      state.mangSinhVien = mangSinhVienCapNhat;
      return { ...state };
    }
    case "SUA_NOI_DUNG_TIM_KIEM": {
      state.noiDungTimKiem = action.val;
      state.mangKetQuaTimKiem = [];
      let ketQuaTimKiem = [...state.mangSinhVien].filter(
        (sv) =>
          sv.hoTen.toLowerCase().includes(action.val.toLowerCase()) ||
          sv.email.toLowerCase().includes(action.val.toLowerCase()) ||
          sv.soDienThoai.includes(action.val)
      );
      state.mangKetQuaTimKiem = ketQuaTimKiem;
      return { ...state };
    }
    case "LUU_NOI_DUNG_TIM_KIEM": {
      let mangTimKiemCapNhat = [...state.mangTimKiem];
      if (!mangTimKiemCapNhat.includes(action.val))
        mangTimKiemCapNhat.push(action.val);
      state.mangTimKiem = mangTimKiemCapNhat;
      return { ...state };
    }
    case "XOA_LICH_SU_TIM_KIEM": {
      let mangTimKiemCapNhat = [...state.mangTimKiem].filter(
        (item) => item !== action.item
      );
      state.mangTimKiem = mangTimKiemCapNhat;
      return { ...state };
    }
    case "CHON_NOI_DUNG_TIM_KIEM": {
      state.noiDungTimKiem = action.item;
      let ketQuaTimKiem = [...state.mangSinhVien].filter(
        (sv) =>
          sv.hoTen.toLowerCase().includes(action.item.toLowerCase()) ||
          sv.email.toLowerCase().includes(action.item.toLowerCase()) ||
          sv.soDienThoai.includes(action.item)
      );
      state.mangKetQuaTimKiem = ketQuaTimKiem;
      return { ...state };
    }
    case "KET_QUA_TIM_KIEM": {
      let ketQuaTimKiem = [...state.mangSinhVien].filter(
        (sv) =>
          sv.hoTen
            .toLowerCase()
            .includes(action.noiDungTimKiem.toLowerCase()) ||
          sv.email
            .toLowerCase()
            .includes(action.noiDungTimKiem.toLowerCase()) ||
          sv.soDienThoai.includes(action.noiDungTimKiem)
      );
      state.mangKetQuaTimKiem = ketQuaTimKiem;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
