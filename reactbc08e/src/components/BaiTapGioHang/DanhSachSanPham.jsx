import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  renderProducts() {
    let { dataPhone } = this.props;
    console.log(dataPhone);
    return dataPhone.map((sp, i) => {
      return (
        <div className="col-4" key={i}>
          <SanPham sp={sp} />
        </div>
      );
    });
  }
  render() {
    return <div className="row">{this.renderProducts()}</div>;
  }
}
