import React, { Component } from "react";
import ProductItemCart from "./ProductItemCart";

export default class ProductListCart extends Component {
  renderListPhone(arr) {
    let { themGioHang } = this.props;
    return arr.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItemCart
            item={item}
            themGioHang={themGioHang}
          ></ProductItemCart>
        </div>
      );
    });
  }
  render() {
    let { dataPhone } = this.props;
    return <div className="row">{this.renderListPhone(dataPhone)}</div>;
  }
}
