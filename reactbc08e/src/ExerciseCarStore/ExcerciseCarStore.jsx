import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";
export default class ExcerciseCarStore extends Component {
  products = [
    {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./img/products/red-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./img/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "Steel car",
      img: "./img/products/steel-car.jpg",
      price: 4000,
    },
  ];
  state = {
    product: {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
  };
  renderModal = (product) => {
    this.setState({ product: product });
  };
  render() {
    return (
      <div className="container">
        <h2>Danh sach xe</h2>
        <ProductList
          productsData={this.products}
          renderModal={this.renderModal}
        />
        <Modal product={this.state.product} />
      </div>
    );
  }
}
