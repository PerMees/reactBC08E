import React, { Component } from "react";
import { connect } from "react-redux";

class TableDanhSachNguoiDung extends Component {
  render() {
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
                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        this.props.xoaNguoiDung(nguoiDung.taiKhoan)
                      }
                    >
                      Xoá
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => this.props.chinhSuaNguoiDung(nguoiDung)}
                    >
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

const mapDispatchToProps = (dispatch) => {
  return {
    xoaNguoiDung: (taiKhoan) => dispatch({ type: "XOA_NGUOI_DUNG", taiKhoan }),
    chinhSuaNguoiDung: (nguoiDung) =>
      dispatch({ type: "CHINH_SUA_NGUOI_DUNG", nguoiDung }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableDanhSachNguoiDung);
