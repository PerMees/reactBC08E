import React, { Component } from "react";
import SanPham from "./SanPham";
export default class DanhSachSanPham extends Component {
  renderSanPham() {
    return this.props.mangSanPham.map((sp, index) => {
      return (
        <div key={index} className="col-4">
          <SanPham sanPham={sp} />
        </div>
      );
    });
  }
  render() {
    return <div className="row">{this.renderSanPham()}</div>;
  }
}
