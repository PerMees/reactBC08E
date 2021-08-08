import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
  handleSubmit = (event) => {
    event.preventDefault(); //Cản sự kiện refresh trang

    let valid = true;

    // Duyệt tất cả lỗi phải bằng rỗng
    for (let key in this.props.nguoiDung.errors) {
      if (this.props.nguoiDung.errors[key] !== "") {
        valid = false;
        break;
      }
    }
    // Duyệt tất cả input !== rỗng

    for (let key in this.props.nguoiDung.values) {
      if (this.props.nguoiDung.values[key] === "") {
        valid = false;
        break;
      }
    }
    if (!valid) {
      alert("Dữ liệu không hợp lệ");
      return;
    }

    this.props.themNguoiDung(this.props.nguoiDung.values);
  };
  handleChangeInput = (event) => {
    let { value, name } = event.target;
    let messageError = "";
    let newValues = { ...this.props.nguoiDung.values };
    let newErrors = { ...this.props.nguoiDung.errors };
    let attrValue = event.target.getAttribute("data-type") || "";
    let regex;

    if (attrValue === "email")
      regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    else if (attrValue === "number") regex = /^\d+$/;
    else if (attrValue === "text") regex = /^[A-Za-z]+$/;

    if (regex) {
      if (!regex.test(value)) messageError = name + " phải đúng định dạng";
    }
    newValues[name] = value;
    if (value.trim() === "") messageError = name + " không được bỏ trống";
    newErrors[name] = messageError;

    this.props.handleChangeInput({ values: newValues, errors: newErrors });
  };
  render() {
    let { taiKhoan, hoTen, matKhau, email, soDienThoai, maLoaiNguoiDung } =
      this.props.nguoiDung.values;
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
                <p className="text-danger">
                  {this.props.nguoiDung.errors.taiKhoan}
                </p>
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
                <p className="text-danger">
                  {this.props.nguoiDung.errors.password}
                </p>
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
                <p className="text-danger">
                  {this.props.nguoiDung.errors.email}
                </p>
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
                <p className="text-danger">
                  {this.props.nguoiDung.errors.hoTen}
                </p>
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
                <p className="text-danger">
                  {this.props.nguoiDung.errors.soDienThoai}
                </p>
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
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() =>
              this.props.capNhatNguoiDung(this.props.nguoiDung.values)
            }
          >
            Cập nhật
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  nguoiDungChinhSua: state.BaiTapQuanLyNguoiDungReducer.nguoiDungChinhSua,
  nguoiDung: state.BaiTapQuanLyNguoiDungReducer.nguoiDung,
});

const mapDispatchToProps = (dispatch) => {
  return {
    themNguoiDung: (user) => dispatch({ type: "THEM_NGUOI_DUNG", user }),
    handleChangeInput: (nguoiDung) =>
      dispatch({ type: "HANDLE_CHANGE_INPUT", nguoiDung }),
    capNhatNguoiDung: (nguoiDungCapNhat) =>
      dispatch({ type: "CAP_NHAT_NGUOI_DUNG", nguoiDungCapNhat }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDangKy);
