import React, { Component } from "react";

export default class ProductDemo extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card">
        <img src={product.img} alt="" />
        <div className="card-body">
          <h4>{product.name}</h4>
          <p>{product.price}</p>
        </div>
      </div>
    );
  }
}
