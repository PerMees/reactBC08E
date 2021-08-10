import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    return (
      <table className="table" style={{ position: "fixed", top: 0, left: 0 }}>
        <tbody></tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
