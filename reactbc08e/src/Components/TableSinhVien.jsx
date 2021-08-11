import React, { Component } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import SearchHistory from "./SearchHistory";

class TableSinhVien extends Component {
  state = {
    displayHistory: false,
    displaySearch: false,
    noiDungTimKiem: "",
  };
  static getDerivedStateFromProps(newProps, currentState) {
    if (currentState.noiDungTimKiem !== newProps.noiDungTimKiem) {
      return {
        ...currentState,
        noiDungTimKiem: newProps.noiDungTimKiem,
      };
    }
    return currentState;
  }
  searchInput = (event) => {
    let { value } = event.target;
    this.props.changeInputSearch(value);
    this.setState({
      displayHistory: false,
      displaySearch: true,
    });
    if (value === "") {
      this.setState({
        displayHistory: true,
        displaySearch: false,
      });
    }
  };
  renderTable() {
    let mangCanRender;
    if (
      this.props.mangKetQuaTimKiem.length === 0 ||
      this.state.noiDungTimKiem === ""
    )
      mangCanRender = [...this.props.mangSinhVien];
    else mangCanRender = [...this.props.mangKetQuaTimKiem];

    if (
      this.state.noiDungTimKiem !== "" &&
      this.props.mangKetQuaTimKiem.length === 0
    )
      return <tr>Không tìm thấy kết quả</tr>;
    return mangCanRender.map((sv, index) => {
      return (
        <tr
          key={index}
          style={{ lineHeight: 5, borderBottom: "1px solid rgba(0,0,0,0.2)" }}
        >
          <td style={{ verticalAlign: "middle", width: 500, paddingLeft: 65 }}>
            {sv.ma}
          </td>
          <td style={{ verticalAlign: "middle", width: 500 }}>{sv.hoTen}</td>
          <td style={{ verticalAlign: "middle", width: 300 }}>
            {sv.soDienThoai}
          </td>
          <td style={{ verticalAlign: "middle", width: 400 }}>{sv.email}</td>
          <td style={{ verticalAlign: "middle", width: 600 }}>
            <button
              className="btn btn-outline-primary mx-4"
              onClick={() => this.props.suaSV(sv.ma)}
            >
              Chỉnh sửa
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                this.props.xoaSV(sv.ma);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <Fragment>
        <table
          className="w-100"
          style={{ position: "relative", border: "none" }}
        >
          <thead className="bg-dark text-white">
            <tr>
              <th
                style={{ verticalAlign: "middle", border: "none", padding: 20 }}
              >
                Mã sinh viên
              </th>
              <th
                style={{ verticalAlign: "middle", border: "none", padding: 20 }}
              >
                Họ tên
              </th>
              <th
                style={{ verticalAlign: "middle", border: "none", padding: 20 }}
              >
                Số điện thoại
              </th>
              <th
                style={{ verticalAlign: "middle", border: "none", padding: 20 }}
              >
                Email
              </th>
              <th
                style={{
                  verticalAlign: "middle",
                  border: "none",
                  padding: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  <input
                    value={this.state.noiDungTimKiem}
                    name="search"
                    placeholder="Search"
                    type="text"
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "4px",
                      height: "2.3rem",
                      border: "none",
                    }}
                    onChange={this.searchInput}
                    onFocus={() => {
                      if (this.state.noiDungTimKiem === "")
                        this.setState({
                          displayHistory: true,
                          displaySearch: false,
                        });
                    }}
                    onBlur={() =>
                      this.setState({
                        displayHistory: false,
                        displaySearch: false,
                      })
                    }
                  />
                  {/* <button
                    className="bg-success"
                    style={{
                      border: "none",
                      color: "white",
                      transition: "all 0.3s ease",
                      padding: "0.3rem",
                      width: "2.3rem",
                      height: "2.3rem",
                      borderRadius: "0 4px 4px 0",
                    }}
                    onClick={() => {
                      this.props.addResultSearch(this.state.noiDungTimKiem);
                      this.props.search(this.state.noiDungTimKiem);
                    }}
                  >
                    <i className="fas fa-search"></i>
                  </button> */}
                  {/* <SearchHistory display={this.state.displayHistory} /> */}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="scroll">{this.renderTable()}</tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  mangSinhVien: state.sinhVienReducer.mangSinhVien,
  noiDungTimKiem: state.sinhVienReducer.noiDungTimKiem,
  mangKetQuaTimKiem: state.sinhVienReducer.mangKetQuaTimKiem,
});

const mapDispatchToProps = (dispatch) => {
  return {
    xoaSV: (ma) => dispatch({ type: "XOA_SV", ma }),
    suaSV: (ma) => dispatch({ type: "SUA_SV", ma }),
    changeInputSearch: (val) =>
      dispatch({ type: "SUA_NOI_DUNG_TIM_KIEM", val }),
    addResultSearch: (val) => dispatch({ type: "LUU_NOI_DUNG_TIM_KIEM", val }),
    search: (noiDungTimKiem) =>
      dispatch({ type: "KET_QUA_TIM_KIEM", noiDungTimKiem }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableSinhVien);
