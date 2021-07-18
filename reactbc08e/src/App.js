import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import HomeLayout from "./Components/Props/DemoProps/HomeLayout";
import RenderWithMap from "./Components/RenderWithMap/RenderWithMap";
import ShoesShop from "./Components/Props/ShoesShop/ShoesShop";
import ProductItem from "./Components/Props/ShoesShop/ProductItem";
// import HomeComponents from "./Components/HomeComponent";
// import DataBiding from "./DataBiding/DataBiding";

function App() {
  return (
    <Fragment>
      {/* <HomeLayout /> */}
      {/* <RenderWithMap /> */}
      <ShoesShop />
    </Fragment>
  );
}

export default App;
