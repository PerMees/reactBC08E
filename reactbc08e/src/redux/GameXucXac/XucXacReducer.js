const xucXacDefault = {
  img: ["1", "1", "1"],
  select: true,
  win: 0,
  total: 0,
};

export const xucXacReducer = (state = xucXacDefault, action) => {
  switch (action.type) {
    case "SELECTED": {
      let xucXacCapNhat = { ...state };
      xucXacCapNhat.select = action.option;
      return xucXacCapNhat;
    }
    case "PLAY": {
      let xucXacCapNhat = { ...state };
      let newImg = [];
      for (let i = 0; i < 3; i++)
        newImg.push(Math.floor(Math.random() * 6) + 1);
      let sum = newImg.reduce((sum, ele) => (sum += ele), 0);
      console.log(sum + " " + xucXacCapNhat.select);
      if (
        (sum > 10 && xucXacCapNhat.select) ||
        (sum <= 10 && !xucXacCapNhat.select)
      )
        xucXacCapNhat.win++;
      xucXacCapNhat.img = newImg;
      xucXacCapNhat.total++;
      return xucXacCapNhat;
    }
    default:
      return { ...state };
  }
};
