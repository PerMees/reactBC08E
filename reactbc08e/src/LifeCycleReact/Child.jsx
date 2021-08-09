import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }

  shouldComponentUpdate(newProps, newState) {
    console.log(newProps);
    console.log(this.props);
    if (this.props.like === newProps.like) return false;
    console.log("shouldComponentUpdate child");

    return true;
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }

  render() {
    console.log("render child");
    return (
      <footer className="bg-dark text-white display-4 text-center p-5 mt-4">
        footer
      </footer>
    );
  }

  componentDidMount() {
    console.log("componentDidMount child");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate child");
  }

  componentWillUnmount() {
      console.log();
  }
}
