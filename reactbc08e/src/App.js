import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import BaiTapQuanLyNguoiDung from "./Components/BaiTapQuanLyNguoiDung";
import LifeCycleReact from "./LifeCycleReact/LifeCycleReact";

function App() {
  return (
    <Fragment>
      <BaiTapQuanLyNguoiDung />
      {/* <LifeCycleReact /> */}
    </Fragment>
  );
}

export default App;
