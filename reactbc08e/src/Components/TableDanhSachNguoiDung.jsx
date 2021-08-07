import React, { Component } from "react";
import { connect } from "react-redux";

class TableDanhSachNguoiDung extends Component {
  render() {
    console.log(this.props.mangNguoiDung);
    return (
      <div className="card mt-4">
        <div className="card-header bg-dark text-white">
          Danh sách người dùng
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Họ tên</th>
              <th>Mật khẩu</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Mã loại người dùng</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.mangNguoiDung.map((nguoiDung, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{nguoiDung.taiKhoan}</td>
                  <td>{nguoiDung.hoTen}</td>
                  <td>{nguoiDung.matKhau}</td>
                  <td>{nguoiDung.email}</td>
                  <td>{nguoiDung.soDienThoai}</td>
                  <td>{nguoiDung.maLoaiNguoiDung}</td>
                  <td>
                    <button className="btn btn-outline-danger">Xoá</button>
                  </td>
                  <td>
                    <button className="btn btn-outline-primary">
                      Chỉnh sửa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangNguoiDung: state.BaiTapQuanLyNguoiDungReducer.mangNguoiDung,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableDanhSachNguoiDung);
