import React, { Component } from "react";
import CardProduct from "./CardProduct";
import Footer from "./Footer";
import ProductDemo from "./ProductDemo";

export default class HomeLayout extends Component {
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
  render() {
    return (
      <div className="container">
        <h3>homelayout</h3>
        <input type="text" />
        <Footer bgColor="red" content="Footer1" />
        <Footer bgColor="blue" content="Footer2" />
        <Footer bgColor="yellow" content="Footer3" />
        <Footer bgColor="gray" content="Footer4" />

        <hr />
        <h3>Product</h3>
        <div className="row">
          <div className="col-4">
            <ProductDemo product={this.arrProduct[0]} />
          </div>
          <div className="col-4">
            <ProductDemo product={this.arrProduct[1]} />
          </div>
          <div className="col-4">
            <ProductDemo product={this.arrProduct[2]} />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <CardProduct product={this.arrProduct[0]} />
          </div>
          <div className="col-4">
            <CardProduct product={this.arrProduct[1]} />
          </div>
          <div className="col-4">
            <CardProduct product={this.arrProduct[2]} />
          </div>
        </div>
      </div>
    );
  }
}
