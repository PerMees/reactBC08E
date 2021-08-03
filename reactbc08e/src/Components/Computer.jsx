import React, { Component } from "react";
import style from "../assets/css/style.module.css";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes random${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0px;}
    }`;
    let { computer } = this.props;
    return (
      <div>
        <style>{keyframe}</style>
        <div className="text-center" style={{ position: "relative" }}>
          <div className={style.speech__bubble2}></div>
          <div className={style.speech__bubble}>
            <img
              src={computer.hinhAnh}
              style={{
                animation: `random${Date.now()} 0.5s`,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              alt=""
              width="250"
            />
          </div>
          <div className={style.player}>
            <img src={"./img/playerComputer.png"} alt="" width="230" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  computer: state.oanTuTiReducer.computer,
});

export default connect(mapStateToProps, null)(Computer);
