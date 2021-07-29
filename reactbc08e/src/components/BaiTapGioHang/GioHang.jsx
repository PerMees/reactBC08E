import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  renderTable() {
    return this.props.gioHang.map((val, i) => {
      return (
        <tr key={i}>
          <td>{val.maSP}</td>
          <td>{val.tenSP}</td>
          <td>
            <img src={val.hinhAnh} width="50px" alt="" />
          </td>
          <td>
            <button
              className="btn btn-outline-primary"
              onClick={() => this.props.tangGiamSL(val.maSP, 1)}
            >
              +
            </button>
            {val.soLuong.toLocaleString()}
            <button
              className="btn btn-outline-primary"
              onClick={() => this.props.tangGiamSL(val.maSP, -1)}
            >
              -
            </button>
          </td>
          <td>{val.giaBan.toLocaleString()}</td>
          <td>{(val.soLuong * val.giaBan).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.xoaGioHang(val.maSP)}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <div
          className="modal fade"
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
                      <th>Tên sản phầm</th>
                      <th>Hình Ảnh</th>
                      <th>Số lượng</th>
                      <th>Giá bán</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTable()}</tbody>
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
  return { gioHang: state.gioHang };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      const action = {
        type: "XOA_GIO_HANG",
        payload: maSP,
      };
      dispatch(action);
    },
    tangGiamSL: (maSP, soLuong) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP: maSP,
        soLuong: soLuong,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHang);
