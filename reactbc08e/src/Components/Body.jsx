import React, { Component } from "react";
import Banner from "./Banner/Banner";
import List from "./List/List";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <Banner />
        <List />
      </div>
    );
  }
}
