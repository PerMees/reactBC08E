import React, { Component } from "react";
import style from "../assets/css/style.module.css";
import Player from "./Player";
import Controller from "./Controller";
import Computer from "./Computer";

export default class BaiTapOanTuTi extends Component {
  render() {
    return (
      <div className={style.page}>
        <div className={style.imgBg}></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <Player />
            </div>
            <div className="col-4">
              <Controller />
            </div>
            <div className="col-4">
              <Computer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
