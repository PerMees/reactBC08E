import React, { Component } from "react";

export default class RenderWithMap extends Component {
  arrProduct = [
    {
      id: 1,
      name: "iphone X",
      price: 1000,
      img: "https://picsum.photos/id/1/200",
    },
    {
      id: 2,
      name: "iphone XS",
      price: 1100,
      img: "https://picsum.photos/id/2/200",
    },
    {
      id: 3,
      name: "iphone XS Max",
      price: 1200,
      img: "https://picsum.photos/id/3/200",
    },
  ];
  renderProduct() {
    return this.arrProduct.map((product) => {
      return (
        <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>
            <img src={product.img} alt="" width="50px" height="50px" />
          </td>
          <td>{product.price}</td>

          <td>
            <button className="btn btn-danger">Xoá</button>
          </td>
        </tr>
      );
    });
  }
  renderProductCard() {
    return this.arrProduct.map((product) => {
      return (
        <div className="col-4">
          <div className="card">
            <img src={product.img} alt="" />
            <div className="card-body">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <h3>Danh sach san pham</h3>
        <table className="table">
          <thead>
            <th>id</th>
            <th>name</th>
            <th>img</th>
            <th>price</th>
            <th></th>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
        <hr />
        <h3>Danh sach san pham</h3>
        <div className="row">{this.renderProductCard()}</div>
      </div>
    );
  }
}
