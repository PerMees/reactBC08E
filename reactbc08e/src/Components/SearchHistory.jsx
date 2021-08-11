import React, { Component } from "react";
import { connect } from "react-redux";

class SearchHistory extends Component {
  tableHistorySearch() {
    return this.props.mangTimKiem.map((item, index) => {
      return (
        <tr key={index} style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}>
          <td
            style={{ width: 300, lineHeight: 3, padding: "3px 3px 3px 15px" }}
          >
            <i
              className="fas fa-history"
              style={{ color: "rgba(0,0,0,0.5)" }}
            ></i>
            <button
              className="ml-2 text-left"
              style={{
                display: "inline-block",
                border: "none",
                backgroundColor: "transparent",
                width: "110px",
              }}
              onClick={() => this.props.chonNoiDung(item)}
            >
              {item}
            </button>
            <button
              name="SearchBtn"
              className="btn text-danger"
              onClick={() => this.props.deleteHistorySearch(item)}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  }

  state = {
    display: "none",
    active: false,
  };
  static getDerivedStateFromProps(newProps, currentState) {
    if (newProps.display) return { display: "block" };
    if (currentState.active) return { display: "block" };
    if (newProps.display === false && currentState.active === false)
      return { display: "none" };
  }
  render() {
    return (
      <table
        onMouseOver={() => {
          this.setState({
            active: true,
          });
        }}
        onMouseOut={() => {
          this.setState({
            active: false,
          });
        }}
        style={{
          position: "relative",
          display: this.state.display,
        }}
      >
        <tbody className="historySearch">{this.tableHistorySearch()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  mangTimKiem: state.sinhVienReducer.mangTimKiem,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHistorySearch: (item) =>
      dispatch({ type: "XOA_LICH_SU_TIM_KIEM", item }),
    chonNoiDung: (item) => dispatch({ type: "CHON_NOI_DUNG_TIM_KIEM", item }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);
