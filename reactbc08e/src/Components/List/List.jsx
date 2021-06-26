import React, { Component } from "react";
import ListItem from "./Item/Item";

export default class List extends Component {
  content() {
    let result = [];
    for (let i = 0; i < 4; i++) {
      result.push(<ListItem />);
    }
    return result;
  }

  render() {
    return (
      <section className="container">
        <div className="row">{this.content()}</div>
      </section>
    );
  }
}
