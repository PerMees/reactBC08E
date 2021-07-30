const menuDefault = [
  { ten: "Salad", gia: 10, sl: 1 },
  { ten: "Cheese", gia: 10, sl: 1 },
  { ten: "Beef", gia: 10, sl: 1 },
];

export const menuReducer = (state = menuDefault, action) => {
  switch (action.type) {
    case "TANG_GIAM_SL": {
      let menu = [...state];
      let mon = menu.find((sp) => sp.ten === action.ten);
      mon.sl += action.sl;
      if (mon.sl < 0) {
        alert("Số lượng không được bé hơn 0");
        mon.sl = 0;
      }
      return menu;
    }
    default:
      return state;
  }
};
