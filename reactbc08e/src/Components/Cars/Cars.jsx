import React, { Component, Fragment } from "react";

export default class Cars extends Component {
  constructor(params) {
    super(params);
    this.state = {
      src: "./img/CarBasic/products/black-car.jpg",
    };
  }

  changeColor(color) {
    this.setState({
      src: `./img/CarBasic/products/${color}-car.jpg`,
    });
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <h3>Bai tap chon xe</h3>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={this.state.src} alt="img" width="100%" />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <button
                  className="btn text-white btn-dark"
                  onClick={() => this.changeColor("black")}
                >
                  Black
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn text-white btn-danger"
                  onClick={() => this.changeColor("red")}
                >
                  Red
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn text-white btn-secondary"
                  onClick={() => this.changeColor("silver")}
                >
                  Silver
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn text-white btn-secondary"
                  onClick={() => this.changeColor("steel")}
                >
                  Steel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
