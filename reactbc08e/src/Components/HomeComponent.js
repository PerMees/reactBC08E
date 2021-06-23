import React, { Component } from "react";

import HeaderComponent from "./HeaderComponent";
import NavComponent from "./NavComponent";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";

export default class HomeComponent extends Component {
  render() {
    return (
      <div class="bg-dark p-1 text-white">
        Home
        <div className="row">
          <div class="col-12 p-4 bg-primary">
            <HeaderComponent />
          </div>
          <div class="col-5 p-4 bg-danger">
            <NavComponent />
          </div>
          <div class="col-7 p-4 bg-success">
            <ContentComponent />
          </div>
          <div class="col-12 p-4 bg-info">
            <FooterComponent />
          </div>
        </div>
      </div>
    );
  }
}
