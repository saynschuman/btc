import React from "react";

class InvestorReport extends React.Component {
  state = {
    singleReportVisible: false
  };
  showReport = () => {
    this.setState({
      singleReportVisible: !this.state.singleReportVisible
    });
  };
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.surName}</td>
        <td className={"green"}>{this.props.power}</td>
        <td className={"blue"}>{this.props.payed}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.email}</td>
        <td>
          <button className={"edit-admin-button"} onClick={this.showReport}>
            Посмотреть
          </button>
        </td>
      </tr>
    );
  }
}

export default InvestorReport;
