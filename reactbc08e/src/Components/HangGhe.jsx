import React, { Component } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe() {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssDangChon = "";
      let i = this.props.danhSachGheDangDat.findIndex(
        (ghedangchon) => ghedangchon.soGhe === ghe.soGhe
      );
      if (i !== -1) {
        cssDangChon = "gheDangChon";
      }
      if (this.props.soHangGhe === 0)
        return (
          <span key={index} className="rowNumber">
            {ghe.soGhe}
          </span>
        );
      let css = "";
      let disabled = false;
      if (ghe.daDat) {
        css = "gheDuocChon";
        disabled = true;
      }
      return (
        <button
          key={index}
          className={`ghe ${css} ${cssDangChon}`}
          disabled={disabled}
          onClick={() => {
            this.props.chonGhe(ghe.soGhe, ghe.gia);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  }
  render() {
    return (
      <div
        className="text-light row justify-content-center align-items-center"
        style={{ fontSize: 30, marginTop: 13 }}
      >
        <span className="firstChar">{this.props.hangGhe.hang}</span>
        {this.renderGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
});

const mapDispatchToProps = (dispatch) => {
  return {
    chonGhe: (soGhe, gia) => {
      return dispatch({ type: "CHON_GHE", soGhe, gia });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
