import React, { Component } from "react";
import * as data from "../../../assets/data/data.json";
import ProductList from "./ProductList";

export default class ShoesShop extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 menu">
            <div
              style={{ position: "fixed", top: "50%", left: 0, width: "38%" }}
            >
              <button
                className="d-block bg-white w-100"
                style={{ border: "none" }}
              >
                Home
              </button>
              <button
                className="d-block bg-white w-100"
                style={{ border: "none" }}
              >
                Shop
              </button>
            </div>
          </div>
          <div className="col-8">
            <h4 className="text-center m-5">Shoes Shop</h4>
            <ProductList arrProduct={data.default}></ProductList>
          </div>
        </div>
      </div>
    );
  }
}
