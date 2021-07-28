import React, { Component } from "react";

export default class ProductItemCart extends Component {
  render() {
    let { item, themGioHang } = this.props;
    return (
      <div className="card">
        <img src={item.hinhAnh} style={{ height: 350 }} alt="" />
        <div className="card-body">
          <h3>{item.tenSP}</h3>
          <p>{item.giaBan}</p>
          <div className="row justify-content-around">
            <button className="btn btn-success">Xem chi tiết</button>
            <button className="btn btn-danger" onClick={() => themGioHang(item)}>
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
