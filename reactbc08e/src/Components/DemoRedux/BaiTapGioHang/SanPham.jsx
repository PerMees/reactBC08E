import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card text-left">
        <img src={sanPham.hinhAnh} style={{ height: 350 }} alt="" />
        <div className="card-body">
          <h3>{sanPham.tenSP}</h3>
          <p>{sanPham.giaBan}</p>
          <div className="row justify-content-around">
            <button className="btn btn-success">Xem chi tiết</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                const action = {
                  type: "THEM_GIO_HANG",
                  sanPhamClick: sanPham,
                };
                this.props.dispatch(action);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(SanPham);
