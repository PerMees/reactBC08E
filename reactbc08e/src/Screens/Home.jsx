import React, { Component } from "react";
import { Fragment } from "react";

import Header from "../Components/Header";
import Body from "../Components/Body";
import Footer from "../Components/Footer";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
    );
  }
}
