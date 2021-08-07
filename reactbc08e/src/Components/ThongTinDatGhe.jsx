import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  renderTableVe() {
    return this.props.danhSachGheDangDat.map((ghe, index) => {
      return (
        <tr key={index} className="text-warning">
          <th>{ghe.soGhe}</th>
          <th>{ghe.gia}</th>
          <th>
            <button
              className="btn btn-outline-danger"
              style={{ border: "none", fontSize: 25 }}
              onClick={() => {
                this.props.xoaVe(ghe.soGhe);
              }}
            >
              X
            </button>
          </th>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <div>
          <button className="gheDuocChon mr-4"></button>
          <span className="text-white" style={{ fontSize: "25px" }}>
            Ghế đã đặt
          </span>
        </div>
        <div>
          <button className="gheDangChon mr-4"></button>
          <span className="text-white" style={{ fontSize: "25px" }}>
            Ghế đang đặt
          </span>
        </div>
        <div>
          <button className="ghe ml-0 mr-4"></button>
          <span className="text-white" style={{ fontSize: "25px" }}>
            Ghế chưa chọn
          </span>
        </div>
        <table
          className="table mt-5"
          border="2"
          style={{ position: "relative" }}
        >
          <thead>
            <tr className="text-light" style={{ fontSize: 25 }}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody className="scroll">
            {this.renderTableVe()}
            <tr>
              <td style={{ width: "192.08px" }}></td>
              <td className="text-warning" style={{ width: "119.98px" }}>
                Tổng tiền
              </td>
              <td className="text-warning" style={{ width: "135.94px" }}>
                {this.props.danhSachGheDangDat.reduce((sum, ghe) => {
                  sum += ghe.gia;
                  return sum;
                }, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
});

const mapDispatchToProps = (dispatch) => {
  return {
    xoaVe(soGhe) {
      return dispatch({ type: "XOA_VE", soGhe });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
