import React, { Component } from "react";
import "./Banner.css";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <section className="py-1 mt-3">
          <div className="container">
            <div className="p-3 bg-light rounded-3 text-center">
              <div className="m-4 m-lg-5 text-left">
                <h1 className="lead">A warm welcome!</h1>
                <p>
                  Bootstrap utility classes are used to create this jumbotron
                  since the old component has been removed from the framework.
                  Why create custom CSS when you can use utilities?
                </p>
                <a className="btn btn-primary btn-lg" href="#!">
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
