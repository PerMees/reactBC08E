import React, { Component } from "react";
import style from "../../assets/css/burger.module.css";
import Burger from "./Burger";
import Menu from "./Menu";

export default class BurgerExercise extends Component {
  render() {
    return (
      <div className="container">
        <h3>Bài tập Burger</h3>
        <div className="row">
          <div className="col-7 text-center">
            <h4>Cửa hàng burger</h4>
            <Burger />
          </div>
          <div className="col-5">
            <h4 className="text-center">Menu</h4>
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}
