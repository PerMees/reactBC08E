import React, { Component } from "react";
import style from "../assets/css/style.module.css";
import { connect } from "react-redux";

class Player extends Component {
  renderChoices() {
    let res = [];
    let { oanTuTiReducer } = this.props;

    for (let i = 0; i < 3; i++) {
      let border = oanTuTiReducer.options[i].selected
        ? "5px solid darkgoldenrod"
        : "none";
      let src = oanTuTiReducer.options[i].hinhAnh;
      res.push(
        <img
          key={i}
          src={src}
          alt=""
          width="55px"
          height="55px"
          className="d-block mx-3"
          style={{ cursor: "pointer", border: border }}
          onClick={() => this.props.changeChoice(i)}
        />
      );
    }
    return res;
  }
  choiceImg() {
    let { oanTuTiReducer } = this.props;
    let i = 0;
    for (i = 0; i < 3; i++) if (oanTuTiReducer.options[i].selected) break;
    let choice = oanTuTiReducer.options[i].hinhAnh;
    return (
      <img
        src={choice}
        alt=""
        width="250"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    );
  }
  render() {
    return (
      <div
        className="row flex-column justify-content-center align-item-center text-center"
        style={{ position: "relative" }}
      >
        <div className={style.speech__bubble2}></div>
        <div className={style.speech__bubble}>{this.choiceImg()}</div>
        <div className={style.player}>
          <img src={"./img/player.png"} alt="" width="230" />
        </div>
        <div className={style.controller}>
          <div className="row justify-content-center align-items-center">
            {this.renderChoices()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  oanTuTiReducer: state.oanTuTiReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeChoice: (index) => {
      const action = {
        type: "CHANGE_CHOICE",
        index,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
