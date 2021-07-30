import React, { Component } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  renderMenu() {
    return this.props.menu.map((val, i) => {
      return (
        <tr key={i}>
          <td>{val.ten}</td>
          <td>{val.gia}</td>
          <td>
            <button
              className="btn btn-outline-primary"
              onClick={() => this.props.tangGiamSL(val.ten, 1)}
            >
              +
            </button>
            {val.sl.toLocaleString()}
            <button
              className="btn btn-outline-warning"
              onClick={() => this.props.tangGiamSL(val.ten, -1)}
            >
              -
            </button>
          </td>
          <td>{(val.sl * val.gia).toLocaleString()}</td>
        </tr>
      );
    });
  }
  total() {
    return this.props.menu.reduce(
      (total, val) => (total += val.sl * val.gia),
      0
    );
  }
  render() {
    return (
      <Fragment>
        <table className="table text-center">
          <thead>
            <tr>
              <th>Tên món</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderMenu()}</tbody>
        </table>
        <div className="text-right mr-5">
          <b>Tổng tiền</b>
          <p>{this.total()}</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer,
  menu: state.menuReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamSL: (ten, sl) => {
      const action = {
        type: "TANG_GIAM_SL",
        ten: ten,
        sl: sl,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
