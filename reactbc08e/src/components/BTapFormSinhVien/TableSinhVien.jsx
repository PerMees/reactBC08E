import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  render() {
    console.log(this.props.mangSinhVien);
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  mangSinhVien: state.SinhVienReducer.mangSinhVien,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(TableSinhVien);
