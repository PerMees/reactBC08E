import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <div className="col-3 p-2">
        <div className="card m-2">
          <div className="card-header">
            <img
              src="https://webaffiliatevn.com/storage/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg"
              alt="img"
              className="w-100"
            />
          </div>
          <div className="card-body text-center">
            <h3>Card title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              blanditiis Lorem, ipsum.
            </p>
          </div>
          <div className="card-footer text-center">
            <button className="btn btn-primary">Find Out More!</button>
          </div>
        </div>
      </div>
    );
  }
}
