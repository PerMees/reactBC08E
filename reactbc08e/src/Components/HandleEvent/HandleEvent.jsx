import React, { Component, Fragment } from "react";
import style from "./HandleEvent.module.css";

export default class HandleEvent extends Component {
  constructor(params) {
    super(params);
    this.state = {
      objStyle: "btn",
      login: true,
      fz: 14,
    };
  }
  login() {
    this.setState(
      {
        objStyle: "btn-1",
        login: false,
      },
      () => {
        console.log(this.state.login);
      }
    );
  }
  logout() {
    this.setState(
      {
        objStyle: "btn",
        login: true,
      },
      () => {
        console.log(this.state.login);
      }
    );
  }
  plus() {
    let result = this.state.fz + 1;

    this.setState(
      {
        fz: result,
      },
      () => console.log(this.state.fz)
    );
  }
  minus() {
    let result = this.state.fz - 1;
    this.setState(
      {
        fz: result,
      },
      () => console.log(this.state.fz)
    );
  }
  renderLogin() {
    if (this.state.login) {
      return (
        <div>
          <p>Dang nhap</p>
          <button
            className={`${style[this.state.objStyle]}`}
            onClick={() => this.login()}
          >
            click me!
          </button>
        </div>
      );
    }
    return (
      <div>
        <p>Dang xuat</p>
        <button
          className={`${style[this.state.objStyle]}`}
          onClick={() => this.logout()}
        >
          click me!
        </button>
      </div>
    );
  }
  render() {
    // return <Fragment>{this.renderLogin()}</Fragment>;
    return (
      <Fragment>
        <h3>Bai Tap tang giam font chu:</h3>
        <p style={{ fontSize: `${this.state.fz}px` }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          fugit saepe! Doloremque iusto exercitationem, ex, nostrum tenetur a
          impedit odit tempore dignissimos earum consequatur sint in itaque
          architecto vel quis.
        </p>
        <button onClick={() => this.plus()}>+</button>
        <button onClick={() => this.minus()}>-</button>
      </Fragment>
    );
  }
}
