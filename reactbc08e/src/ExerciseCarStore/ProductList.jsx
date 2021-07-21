import React, { Component, Fragment } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProductsList(arr, renderModal) {
    return arr.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem product={product} renderModal={renderModal} />
        </div>
      );
    });
  }
  render() {
    let { productsData, renderModal } = this.props;
    return (
      <div className="row">
        {this.renderProductsList(productsData, renderModal)}
      </div>
    );
  }
}
