import React, { Component, Fragment } from "react";
import style from "../assets/css/glass.module.css";
import modelGlass from "../assets/glassesImage/model.jpg";
import * as data from "../assets/data/dataGlasses.json";

export default class Glass extends Component {
  constructor(params) {
    super(params);
    this.state = {
      glass: 1,
    };
  }
  contentButton(arr) {
    let arrResult = arr.map((glass) => {
      return (
        <div className="col-2">
          <button onClick={() => this.handleGlassBtn(glass.id)}>
            <img
              src={require(`../assets/glassesImage/v${glass.id}.png`).default}
              alt=""
              width="100%"
            />
          </button>
        </div>
      );
    });
    return arrResult;
  }
  handleGlassBtn(id) {
    this.setState({
      glass: id,
    });
  }
  render() {
    return (
      <Fragment>
        <div className={`${style.slider}`}>
          <div className={`${style.header}`}>
            <h2>TRY GLASSES APP ONLINE</h2>
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className={`col-6 ${style.glass__item}`}>
                <img src={modelGlass} alt="" width="60%" />
                <img
                  src={
                    require(`../assets/glassesImage/v${this.state.glass}.png`)
                      .default
                  }
                  alt=""
                />
                <div className={`${style.detail}`}>
                  <h3>
                    Name <span>Price</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore, nobis?
                  </p>
                </div>
              </div>
              <div className={`col-6 ${style.glass__item}`}>
                <img src={modelGlass} width="60%" alt="" />
              </div>
              <div className={`${style.control}`}>
                {this.contentButton(data.default)}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
