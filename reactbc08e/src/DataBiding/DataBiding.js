import React, { Component } from "react";

export default class DataBiding extends Component {
  name = "Phuc";
  age = "20";
  renderInfo() {
    return (
      <div>
        <p>Name: {this.name}</p>
        <p>Age: {this.age}</p>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div>{this.renderInfo()}</div>
      </div>
    );
  }
}
