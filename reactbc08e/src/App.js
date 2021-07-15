import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import BaiTapChonXe from "./Components/BaiTapChonXe/BaiTapChonXe";
// import HomeComponents from "./Components/HomeComponent";
// import DataBiding from "./DataBiding/DataBiding";

function App() {
  return (
    <Fragment>
      {/* <HomeComponents /> s*/}
      {/* {<DataBiding /> */}
      <BaiTapChonXe></BaiTapChonXe>
    </Fragment>
  );
}

export default App;
