import React from "react";

export default function CardProduct(props) {
  let { product } = props;
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
