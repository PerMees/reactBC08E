import React, { Component } from "react";
import style from "../../assets/css/style.module.css";
import { connect } from "react-redux";
import ThongTinTroChoi from "./ThongTinTroChoi";

class GameXucXac extends Component {
  renderXucXac(arr) {
    return arr.map((val, key) => {
      return (
        <img
          key={key}
          src={require(`../../assets/img/${val}.png`).default}
          alt=""
          width="50rem"
          height="50rem"
        />
      );
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">GAME ĐỔ XÚC XẮC</h1>
        <div className="row justify-content-around mt-5">
          <button
            className={style.playBtn}
            onClick={() => {
              this.props.handleSelectBtn(true);
            }}
          >
            Tài
          </button>
          <div className="row">{this.renderXucXac(this.props.xucxac)}</div>
          <button
            className={style.playBtn}
            onClick={() => {
              this.props.handleSelectBtn(false);
            }}
          >
            Xỉu
          </button>
        </div>
        <ThongTinTroChoi />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  xucxac: state.xucXacReducer.img,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectBtn: (option) => {
      const action = {
        type: "SELECTED",
        option,
      };
      dispatch(action);
    },
    playBtnClicked: () => {
      const action = {
        type: "PLAY",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameXucXac);
