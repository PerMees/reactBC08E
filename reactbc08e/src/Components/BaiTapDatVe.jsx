import React, { Component, Fragment } from "react";
import ThongTinDatGhe from "./ThongTinDatGhe";
import HangGhe from "./HangGhe";
import data from "../assets/data/danhSachGhe.json";

export default class BaiTapDatVe extends Component {
  renderHangGhe() {
    return data.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="bookingMovie">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-8">
              <h1 className="text-warning text-center" style={{ fontSize: 35 }}>
                Đặt vé xem phim
              </h1>
              <p className="text-center text-white" style={{ fontSize: 16 }}>
                Màn hình
              </p>
              <div className="row justify-content-center">
                <div className="screen"></div>
              </div>
              {this.renderHangGhe()}
            </div>
            <div className="col-4">
              <h3
                className="text-white text-center"
                style={{ fontSize: 35, marginBottom: 20 }}
              >
                Danh sách ghế bạn chọn
              </h3>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
