import React, { Component } from "react";

export default class FormDangKy extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      password: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      password: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault(); //Cản sự kiện refresh trang
    console.log(this.state.values);
  };
  handleChangeInput = (event) => {
    let { value, name } = event.target;
    let messageError = "";
    let newValues = { ...this.state.values };
    let newErrors = { ...this.state.errors };

    let attrValue = event.target.getAttribute("data-type") || "";
    let regex = "";
    if (attrValue === "email")
      regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex) {
      if (!regex.test(value)) messageError = name + " phải đúng định dạng";
    }
    newValues[name] = value;
    if (value.trim() === "") messageError = name + " không được bỏ trống";
    newErrors[name] = messageError;

    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };
  render() {
    return (
      <form
        className="card mt-5"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <div className="card-header bg-dark text-white">Form Đăng Ký</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Tài khoản</p>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.taiKhoan}</p>
              </div>
              <div className="form-group">
                <p>Mật khẩu</p>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.password}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  data-type="email"
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Họ tên</p>
                <input
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.hoTen}</p>
              </div>
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  type="text"
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <p>Mã loại người dùng</p>
                <select className="form-control" name="maLoaiNguoiDung">
                  <option value="KhachHang">Khách hàng</option>
                  <option value="QuanTri">Quản trị</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-left">
          <button className="btn btn-outline-success mr-2" type="submit">
            Đăng ký
          </button>
          <button className="btn btn-outline-primary" type="button">
            Cập nhật
          </button>
        </div>
      </form>
    );
  }
}
