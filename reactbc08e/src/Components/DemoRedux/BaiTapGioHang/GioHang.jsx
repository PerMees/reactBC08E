import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  renderGioHang() {
    return this.props.gioHang.map((sp, i) => {
      return (
        <tr key={i}>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img src={sp.hinhAnh} width={50} alt="" />
          </td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                const action = {
                  type: "TANG_GIAM_GIO_HANG",
                  maSPClick: sp.maSP,
                  soLuong: 1,
                };
                this.props.dispatch(action);
              }}
            >
              +
            </button>
            {sp.soLuong}
            <button
              className="btn btn-primary"
              onClick={() => {
                const action = {
                  type: "TANG_GIAM_GIO_HANG",
                  maSPClick: sp.maSP,
                  soLuong: -1,
                };
                this.props.dispatch(action);
              }}
            >
              -
            </button>
          </td>
          <td>{sp.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                const action = {
                  type: "XOA_GIO_HANG",
                  maSPClick: sp.maSP,
                };
                this.props.dispatch(action);
              }}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div
          className="modal fade "
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg text-center" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Số lượng</th>
                      <th>Giá bán</th>
                      <th>Thành tiền</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>{this.renderGioHang()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.gioHangReducer,
  };
};

const ComponentGioHangRedux = connect(mapStateToProps)(GioHang);
export default ComponentGioHangRedux;
