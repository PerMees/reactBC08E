import React, { Component, Fragment } from "react";

export default class BaiTapChonXe extends Component {
  constructor(params) {
    super(params);
    this.state = {
      color: "Black",
      src: "./assets/img/CarBasic/products/black-car.jpg",
      price: 19500,
    };
  }
  handleChangeColor(color, price) {
    this.setState({
      color: color,
      src: `./assets/img/CarBasic/products/${color}-car.jpg`,
      price: price,
    });
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className="text-center m-3">Bai Tap Chon Xe</h1>
          <div className="row">
            <div className="col-6">
              <img src={this.state.src} width="100%" className="d-block"></img>
              <p
                style={{
                  backgroundColor: "rgba(0,0,0,0.2)",
                  padding: "1rem",
                  marginTop: "1rem",
                }}
              >
                {this.state.color} Car
              </p>
              <table
                style={{
                  border: "1px solid black",
                  borderSpacing: "0px",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr style={{ border: "1px solid black" }}>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      Color
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      {this.state.color}
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid black" }}>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      Price
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      ${this.state.price}
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid black" }}>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      Engine Type
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      In-line 4-Cylinder
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid black" }}>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      Displacement
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      1966cc
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid black" }}>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      HousePower (SAE net)
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      158 @ 6500 rpm
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid black" }}>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      Torque (SAE net)
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      138 lt-ft @ 4200 rpm
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid black" }}>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      Redline
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "0.5rem 0.2rem",
                      }}
                    >
                      6700rpm
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="card">
                <div
                  className="card-header"
                  style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                >
                  <p style={{ color: "blue", padding: 0, margin: 0 }}>
                    Exterior Color
                  </p>
                </div>
                <div className="card-body">
                  <button
                    style={{
                      padding: "1rem 0.2rem",
                      backgroundColor: "white",
                      width: "100%",
                      margin: "0.5rem 0",
                    }}
                    onClick={() => this.handleChangeColor("Black", 19550)}
                  >
                    <div
                      className="row"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="col-3">
                        <img
                          src="./assets/img/CarBasic/icons/icon-black.jpg"
                          alt=""
                          width="50rem"
                          height="50rem"
                        />
                      </div>
                      <div className="col-9 text-left">
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            margin: 0,
                          }}
                        >
                          Crystal Black
                        </p>
                        <small
                          style={{
                            fontSize: "1rem",
                            margin: 0,
                          }}
                        >
                          Pearl
                        </small>
                      </div>
                    </div>
                  </button>
                  <button
                    style={{
                      padding: "1rem 0.2rem",
                      backgroundColor: "white",
                      width: "100%",
                      margin: "0.5rem 0",
                    }}
                    onClick={() => this.handleChangeColor("Steel", 19450)}
                  >
                    <div
                      className="row"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="col-3">
                        <img
                          src="./assets/img/CarBasic/icons/icon-steel.jpg"
                          alt=""
                          width="50rem"
                          height="50rem"
                        />
                      </div>
                      <div className="col-9 text-left">
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            margin: 0,
                          }}
                        >
                          Modern Steel
                        </p>
                        <small
                          style={{
                            fontSize: "1rem",
                            margin: 0,
                          }}
                        >
                          Metallic
                        </small>
                      </div>
                    </div>
                  </button>
                  <button
                    style={{
                      padding: "1rem 0.2rem",
                      backgroundColor: "white",
                      width: "100%",
                      margin: "0.5rem 0",
                    }}
                    onClick={() => this.handleChangeColor("Silver", 19350)}
                  >
                    <div
                      className="row"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="col-3">
                        <img
                          src="./assets/img/CarBasic/icons/icon-silver.jpg"
                          alt=""
                          width="50rem"
                          height="50rem"
                        />
                      </div>
                      <div className="col-9 text-left">
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            margin: 0,
                          }}
                        >
                          Lunar Silver
                        </p>
                        <small
                          style={{
                            fontSize: "1rem",
                            margin: 0,
                          }}
                        >
                          Metallic
                        </small>
                      </div>
                    </div>
                  </button>
                  <button
                    style={{
                      padding: "1rem 0.2rem",
                      backgroundColor: "white",
                      width: "100%",
                      margin: "0.5rem 0",
                    }}
                    onClick={() => this.handleChangeColor("Red", 19750)}
                  >
                    <div
                      className="row"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="col-3">
                        <img
                          src="./assets/img/CarBasic/icons/icon-red.jpg"
                          alt=""
                          width="50rem"
                          height="50rem"
                        />
                      </div>
                      <div className="col-9 text-left">
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            margin: 0,
                          }}
                        >
                          Rallye Red
                        </p>
                        <small
                          style={{
                            fontSize: "1rem",
                            margin: 0,
                          }}
                        >
                          Metallic
                        </small>
                      </div>
                    </div>
                  </button>
                </div>
                <div
                  className="card-footer"
                  style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                >
                  <p style={{ color: "blue", padding: 0, margin: 0 }}>Wheels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
