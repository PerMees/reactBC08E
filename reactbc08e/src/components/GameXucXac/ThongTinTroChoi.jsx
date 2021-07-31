import React, { Component } from "react";
import style from "../../assets/css/style.module.css";
import { connect } from "react-redux";

class ThongTinTroChoi extends Component {
  render() {
    return (
      <div className="text-center mt-5">
        <h4>
          BẠN CHỌN:{" "}
          <span className={style.selected}>
            {" "}
            {this.props.select ? "TÀI" : "XỈU"}
          </span>
        </h4>
        <h5>
          Số bàn thắng:
          <span className={style.score}> {this.props.win}</span>
        </h5>
        <h5>
          Tổng số bàn chơi:
          <span className={style.round}> {this.props.total}</span>
        </h5>
        <button
          className={style.playGameBtn}
          onClick={() => this.props.playBtnClicked()}
        >
          Play game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  select: state.xucXacReducer.select,
  win: state.xucXacReducer.win,
  total: state.xucXacReducer.total,
});

const mapDispatchToProps = (dispatch) => {
  return {
    playBtnClicked: () => {
      const action = {
        type: "PLAY",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinTroChoi);
