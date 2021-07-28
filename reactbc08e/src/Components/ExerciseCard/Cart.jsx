import React, { Component, Fragment } from "react";

export default class Cart extends Component {
  renderGioHang(arr) {
    let { xoaGioHang, tangGiamSoLuong } = this.props;
    return arr.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} width="40rem" alt />
          </td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => tangGiamSoLuong(item.maSP, 1)}
            >
              +
            </button>
            {item.soLuong.toLocaleString()}
            <button
              className="btn btn-primary"
              onClick={() => tangGiamSoLuong(item.maSP, -1)}
            >
              -
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => xoaGioHang(item.maSP)}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    let { gioHang } = this.props;
    return (
      <Fragment>
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
                <h5 className="modal-title">Giỏ hàng</h5>
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
                  <tbody>{this.renderGioHang(gioHang)}</tbody>
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
      </Fragment>
    );
  }
}
