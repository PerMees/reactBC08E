import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderCards() {
    let { arrProduct } = this.props;
    return arrProduct.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem product={product}></ProductItem>
        </div>
      );
    });
  }
  render() {
    return <div className="row">{this.renderCards()}</div>;
  }
}
