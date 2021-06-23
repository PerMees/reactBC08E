import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import HomeComponents from "./Components/HomeComponent";
import DataBiding from "./DataBiding/DataBiding";

function App() {
  return (
    <Fragment>
      <HomeComponents />
      <DataBiding />
    </Fragment>
  );
}

export default App;
