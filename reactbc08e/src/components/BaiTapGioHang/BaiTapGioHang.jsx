import React, { Component } from "react";
import * as data from "../../data/dataPhone.json";
import DanhSachSanPham from "./DanhSachSanPham";
import GioHang from "./GioHang";

export default class BaiTapGioHang extends Component {
  dataPhone = data.default;
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bài tập giỏ hàng</h3>
        <p
          className="text-right text-danger"
          data-toggle="modal"
          data-target="#modelId"
          style={{ cursor: "pointer" }}
        >
          Giỏ hàng
        </p>
        <DanhSachSanPham dataPhone={this.dataPhone} />
        <GioHang />
      </div>
    );
  }
}
