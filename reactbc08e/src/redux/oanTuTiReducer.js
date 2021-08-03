const oanTuTiState = {
  options: [
    { loai: "keo", hinhAnh: "./img/keo.png", selected: true },
    { loai: "bao", hinhAnh: "./img/bao.png", selected: false },
    { loai: "bua", hinhAnh: "./img/bua.png", selected: false },
  ],
  win: 0,
  total: 0,
  computer: { loai: "keo", hinhAnh: "./img/keo.png" },
  result: "",
};

export const oanTuTiReducer = (state = oanTuTiState, action) => {
  switch (action.type) {
    case "CHANGE_CHOICE": {
      let newOptions = [...state.options];
      newOptions.map((val, index) => {
        val.selected = false;
        if (index === action.index) {
          val.selected = true;
        }
        return val;
      });
      state.options = newOptions;
      return { ...state };
    }
    case "RANDOM": {
      let randomChoice = Math.floor(Math.random() * 3);
      let computerChoice = state.options[randomChoice];
      state.computer = computerChoice;
      return { ...state };
    }
    case "ENDGAME": {
      let playerChoice = state.options.find((item) => item.selected);
      let result = "";
      if (playerChoice === state.computer) result = "Hoà";
      else if (playerChoice.loai === "keo" && state.computer.loai === "bua")
        result = "Thua";
      else if (playerChoice.loai === "keo" && state.computer.loai === "bao")
        result = "Thắng";
      else if (playerChoice.loai === "bua" && state.computer.loai === "bao")
        result = "Thua";
      else if (playerChoice.loai === "bua" && state.computer.loai === "keo")
        result = "Thắng";
      else if (playerChoice.loai === "bao" && state.computer.loai === "bua")
        result = "Thắng";
      else if (playerChoice.loai === "bao" && state.computer.loai === "kéo")
        result = "Thua";
      if (result === "Thắng") state.win++;
      state.result = result;
      state.total++;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
