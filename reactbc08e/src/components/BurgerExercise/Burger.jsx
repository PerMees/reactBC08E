import React, { Component } from "react";
import { connect } from "react-redux";
// import "../../assets/css/burger.css";

import style from "../../assets/css/burger.module.css";

class Burger extends Component {
  renderBurger() {
    let res = [];
    let index = 0;

    for (let [key, val] of Object.entries(this.props.burger)) {
      for (let i = 0; i < val; i++) {
        // res.push(<div className={key} key={index}></div>);
        res.push(<div className={style[key]} key={index}></div>);
        index++;
      }
    }
    return res;
  }
  render() {
    return (
      <div className="row flex-column justify-content-center align-items-center">
        {this.renderBurger()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer,
});

export default connect(mapStateToProps)(Burger);
