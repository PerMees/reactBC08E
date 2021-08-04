import React, { Component } from "react";

export default class BaiTapDatVe extends Component {
  render() {
    return (
      <div className="bookingMovie">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-8">
              <h1 className="text-warning text-center display-4">
                Đặt vé xem phim
              </h1>
              <p className="text-center text-white mt-3">Màn hình</p>
              <div className="row justify-content-center">
                <div className="screen"></div>
              </div>
            </div>
            <div className="col-4">
              <h3 className="text-white text-center">Thong Tin</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
