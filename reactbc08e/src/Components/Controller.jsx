import React, { Component } from "react";
import { connect } from "react-redux";

class Controller extends Component {
  render() {
    return (
      <div className="text-center">
        <h1
          className="text-warning"
          style={{ fontSize: "3.2rem", marginTop: "2rem" }}
        >
          {this.props.result}
        </h1>
        <h1
          className="text-success"
          style={{ fontSize: "3.2rem", marginTop: "2rem" }}
        >
          Số bàn thắng: <span>{this.props.win}</span>
        </h1>
        <h1
          className="text-success"
          style={{ fontSize: "3.2rem", marginTop: "2rem" }}
        >
          Số bàn chơi: <span>{this.props.total}</span>
        </h1>
        <button
          className="btn btn-success"
          style={{ marginTop: "2rem" }}
          onClick={() => this.props.playGame()}
        >
          Play Game
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  result: state.oanTuTiReducer.result,
  win: state.oanTuTiReducer.win,
  total: state.oanTuTiReducer.total,
});

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerChoice = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomComputerChoice);
          dispatch({ type: "ENDGAME" });
        }
      }, 100);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
