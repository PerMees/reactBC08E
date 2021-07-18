import React, { Component } from "react";

export default class Footer extends Component {
  //? this.props
  // * this.props la thuoc tinh co san cua Component de nhan gia tri
  // * tu Component cha truyen vao

  render() {
    console.log(this.props);
    return (
      <footer style={{ backgroundColor: `${this.props.bgColor}` }}>
        {this.props.content}
      </footer>
    );
  }
}
