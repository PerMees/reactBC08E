export const burgerDefault = {
  breadTop: 1,
  salad: 1,
  cheese: 1,
  beef: 1,
  breadBottom: 1,
};
export const burgerReducer = (state = burgerDefault, action) => {
  switch (action.type) {
    case "TANG_GIAM_SL": {
      let burger = { ...state };
      for (let ch in burger) {
        if (ch === action.ten.toLowerCase()) {
          burger[ch] += action.sl;
          if (burger[ch] < 0) burger[ch] = 0;
        }
      }

      return burger;
    }
    default:
      return state;
  }
};
