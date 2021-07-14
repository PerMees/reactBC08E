import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
// import HomeComponents from "./Components/HomeComponent";
// import DataBiding from "./DataBiding/DataBiding";
// import HandleEvent from "./Components/HandleEvent/HandleEvent.jsx";
import Cars from "./Components/Cars/Cars";

function App() {
  return (
    <Fragment>
      {/* <HomeComponents /> */}
      {/* {<DataBiding /> */}
      <Cars></Cars>
    </Fragment>
  );
}

export default App;
