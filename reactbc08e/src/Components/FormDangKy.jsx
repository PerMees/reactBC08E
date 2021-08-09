import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
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

  componentWillReceiveProps(newProps) {
    this.setState({
      values: newProps.nguoiDungChinhSua,
    });
  }

  // static getDerivedStateFromProps(newProps, currentState) {
  //   if (currentState.values.taiKhoan !== newProps.nguoiDungChinhSua.taiKhoan)
  //     // return về state mới
  //     return {
  //       ...currentState,
  //       values: newProps.nguoiDungChinhSua,
  //     };
  // }
  handleSubmit = (event) => {
    event.preventDefault(); //Cản sự kiện refresh trang

    let valid = true;

    // Duyệt tất cả lỗi phải bằng rỗng
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
        break;
      }
    }
    // Duyệt tất cả input !== rỗng

    for (let key in this.state.values) {
      if (this.state.values[key] === "") {
        valid = false;
        break;
      }
    }
    if (!valid) {
      alert("Dữ liệu không hợp lệ");
      return;
    }

    this.props.themNguoiDung(this.state.values);
  };
  handleChangeInput = (event) => {
    let { value, name } = event.target;
    let messageError = "";
    let newValues = { ...this.state.values };
    let newErrors = { ...this.state.errors };
    let attrValue = event.target.getAttribute("data-type") || "";
    let regex;

    if (attrValue === "email")
      regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    else if (attrValue === "number") regex = /^\d+$/;
    else if (attrValue === "text") regex = /^[A-Z a-z]+$/;

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
    let { taiKhoan, hoTen, matKhau, email, soDienThoai, maLoaiNguoiDung } =
      this.state.values;
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
                  value={taiKhoan}
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
                  value={matKhau}
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.password}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  value={email}
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
                  value={hoTen}
                  data-type="text"
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
                  value={soDienThoai}
                  data-type="number"
                  type="text"
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <p>Mã loại người dùng</p>
                <select
                  value={maLoaiNguoiDung}
                  className="form-control"
                  name="maLoaiNguoiDung"
                  onChange={this.handleChangeInput}
                >
                  <option value="">-</option>
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

const mapStateToProps = (state) => ({
  nguoiDungChinhSua: state.BaiTapQuanLyNguoiDungReducer.nguoiDungChinhSua,
});

const mapDispatchToProps = (dispatch) => {
  return {
    themNguoiDung: (user) => dispatch({ type: "THEM_NGUOI_DUNG", user }),
    handleChangeInput: (nguoiDung) =>
      dispatch({ type: "HANDLE_CHANGE_INPUT", nguoiDung }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDangKy);
