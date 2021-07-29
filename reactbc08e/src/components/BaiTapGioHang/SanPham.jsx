import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { sp } = this.props;
    return (
      <div className="card">
        <img src={sp.hinhAnh} alt="" style={{ height: "20rem" }} />
        <div className="card-body">
          <h3>{sp.tenSP}</h3>
          <p>{sp.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => this.props.themGioHang(sp)}
          >
            Them san pham
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sp) => {
      const action = {
        type: "THEM_GIO_HANG",
        payload: sp,
      };
      dispatch(action);
    },
  };
};

export default connect("", mapDispatchToProps)(SanPham);
