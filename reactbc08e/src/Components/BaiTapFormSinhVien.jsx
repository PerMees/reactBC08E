import React, { Component } from "react";
import ThongTinSinhVien from "./ThongTinSinhVien";
import TableSinhVien from "./TableSinhVien";

export default class BaiTapFormSinhVien extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}
      >
        <ThongTinSinhVien />
        <TableSinhVien />
      </div>
    );
  }
}
