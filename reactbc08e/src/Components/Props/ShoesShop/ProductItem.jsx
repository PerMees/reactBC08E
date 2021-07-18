import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card" style={{ height: "25rem", margin: "1rem 0" }}>
        <img src={product.image} alt="" />
        <div
          className="card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h4>{product.name}</h4>
          <p>${product.price}</p>
          <button className="btn btn-dark">
            Add to card
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    );
  }
}
