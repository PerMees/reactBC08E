import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import BaiTapXemChiTiet from "./BaiTapXemChiTiet/BaiTapXemChiTiet";
import ExcerciseCarStore from "./ExerciseCarStore/ExcerciseCarStore";

function App() {
  return (
    <Fragment>
      {/* <ExcerciseCarStore /> */}
      <BaiTapXemChiTiet></BaiTapXemChiTiet>
    </Fragment>
  );
}

export default App;
