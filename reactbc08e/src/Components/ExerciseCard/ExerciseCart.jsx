import React, { Component } from "react";
import Cart from "./Cart";
import ProductItemCart from "./ProductItemCart";
import ProductListCart from "./ProductListCart";

export default class ExerciseCard extends Component {
  dataPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    gioHang: [],
  };
  themGioHang = (SpClicked) => {
    let spGioHang = { ...SpClicked, soLuong: 1 };
    let gioHangCapNhat = [...this.state.gioHang];
    let spGH = gioHangCapNhat.find((sp) => sp.maSP === spGioHang.maSP);
    if (spGH) {
      spGH.soLuong += 1;
    } else gioHangCapNhat.push(spGioHang);
    this.setState({ gioHang: gioHangCapNhat });
  };
  xoaGioHang = (maSpClicked) => {
    let { gioHang } = this.state;
    // let index = gioHang.findIndex((sp) => sp.maSP === maSpClicked);
    // if (index !== -1) {
    //   gioHang.splice(index, 1);
    // }
    gioHang = gioHang.filter((sp) => sp.maSP !== maSpClicked);
    this.setState({ gioHang: gioHang });
  };
  tangGiamSoLuong = (maSpClicked, soLuong) => {
    let { gioHang } = this.state;
    let spTangGiam = gioHang.find((sp) => sp.maSP === maSpClicked);
    if (spTangGiam) {
      spTangGiam.soLuong += soLuong;
      // if (spTangGiam.soLuong < 1) {
      //   return this.xoaGioHang(maSpClicked);
      // }
      if (spTangGiam.soLuong < 1) {
        alert("Số lượng sản phẩm không được nhỏ hơn 1");
        spTangGiam.soLuong = 1;
      }
    }
    this.setState({ gioHang: gioHang });
  };
  tinhTongSoLuong = () => {
    let { gioHang } = this.state;
    let tongSoLuong = gioHang.reduce((res, value) => (res += value.soLuong), 0);
    return tongSoLuong.toLocaleString();
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-4">Bài tập giỏ hàng</h3>
        <div className="text-right mb-4">
          <span
            style={{ cursor: "pointer" }}
            className="text text-danger font-weight-bold"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng {this.tinhTongSoLuong()}
          </span>
          <Cart
            gioHang={this.state.gioHang}
            xoaGioHang={this.xoaGioHang}
            tangGiamSoLuong={this.tangGiamSoLuong}
          />
        </div>
        <ProductListCart
          dataPhone={this.dataPhone}
          themGioHang={this.themGioHang}
        />
        <div className="row">
          <div className="col-4">
            <h3 className="text-center"></h3>
          </div>
        </div>
      </div>
    );
  }
}
