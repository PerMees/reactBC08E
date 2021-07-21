import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product, renderModal } = this.props;
    return (
      <div className="card">
        <img src={product.img} alt="" />
        <div className="card-body">
          <h4>{product.name}</h4>
          <p>price</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target={`#pr-${product.id}`}
            onClick={() => renderModal(product)}
          >
            Xem chi tiet
          </button>
        </div>
      </div>
    );
  }
}
