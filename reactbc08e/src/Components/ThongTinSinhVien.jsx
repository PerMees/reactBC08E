import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinSinhVien extends Component {
  state = {
    values: {
      ma: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      ma: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  };
  componentWillReceiveProps(newProps) {
    this.setState({
      values: newProps.sinhVien,
    });
  }
  valid() {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
        break;
      }
    }
    for (let key in this.state.values) {
      if (this.state.values[key] === "") {
        valid = false;
        break;
      }
    }
    return valid;
  }
  handleChangedButton() {
    if (!this.valid()) {
      alert("Thông tin nhập không chính xác, vui lòng nhập lại");
      return;
    }
    this.props.suaSinhVien(this.state.values);
  }
  handleSubmitButton() {
    if (!this.valid()) {
      alert("Thông tin nhập không chính xác, vui lòng nhập lại");
      return;
    }

    this.props.themSinhVien(this.state);
  }
  handleChangedInput = (event) => {
    let { value, name } = event.target;
    let newValues = { ...this.state.values };
    let newErrors = { ...this.state.errors };
    let attrValue = event.target.getAttribute("data-type") || "";
    let regex,
      messageError = "";

    if (attrValue === "email")
      regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    else if (attrValue === "number") regex = /^\d+$/;
    else if (attrValue === "text") regex = /[\p{Letter}\p{Mark}\s]+/gu;

    if (regex) {
      if (!regex.test(value)) messageError = name + " phải đúng định dạng";
    }

    if (value.trim() === "") messageError = name + " không được bỏ trống";

    newValues[name] = value;
    newErrors[name] = messageError;

    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };
  render() {
    return (
      <div>
        <form action="" className="card" style={{ border: "none" }}>
          <div className="card-header bg-dark text-white p-3 mt-5">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body p-2">
            <div className="row p-0">
              <div className="col-6">
                <div className="form-group">
                  <p className="m-0">Mã sinh viên</p>
                  <input
                    value={this.state.values.ma}
                    type="text"
                    tabIndex="1"
                    className="form-control"
                    onChange={this.handleChangedInput}
                    name="ma"
                  />
                  <p className="text-danger">{this.state.errors.ma}</p>
                </div>
                <div className="form-group">
                  <p className="m-0">Số điện thoại</p>
                  <input
                    value={this.state.values.soDienThoai}
                    data-type="number"
                    type="text"
                    tabIndex="3"
                    className="form-control"
                    onChange={this.handleChangedInput}
                    name="soDienThoai"
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p className="m-0">Họ tên</p>
                  <input
                    value={this.state.values.hoTen}
                    data-type="text"
                    type="text"
                    tabIndex="2"
                    className="form-control"
                    onChange={this.handleChangedInput}
                    name="hoTen"
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group">
                  <p className="m-0">Email</p>
                  <input
                    value={this.state.values.email}
                    data-type="email"
                    type="text"
                    tabIndex="4"
                    className="form-control"
                    onChange={this.handleChangedInput}
                    name="email"
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
            </div>
            <button
              className="btn btn-success mr-3"
              type="button"
              onClick={() => this.handleSubmitButton()}
            >
              Thêm sinh viên
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => this.handleChangedButton()}
            >
              Chỉnh sửa
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sinhVien: state.sinhVienReducer.sinhVien,
});

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sv) => dispatch({ type: "THEM_SINH_VIEN", sv }),
    suaSinhVien: (sv) => dispatch({ type: "HOAN_THANH_SUA_SINH_VIEN", sv }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinSinhVien);
