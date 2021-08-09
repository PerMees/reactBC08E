import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycleReact extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, like: 0 };
    console.log("constructor");
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>LifeCycle React</h3>
        <h4>Number: {this.state.number}</h4>
        <button
          className="btn btn-outline-success"
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          +
        </button>
        {this.state.number > 5 ? (
          ""
        ) : (
          <Child number={this.state.number} like={this.state.like} />
        )}
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
}
