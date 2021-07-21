import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sp, handleClickBtn } = this.props;
    return (
      <div className="card">
        <img src="https://picsum.photos/400/400" alt="" />
        <div className="card-body">
          <h4>{sp.tenSP}</h4>
          <p>{sp.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => handleClickBtn(sp)}
          >
            Xem chi tiet
          </button>
        </div>
      </div>
    );
  }
}
