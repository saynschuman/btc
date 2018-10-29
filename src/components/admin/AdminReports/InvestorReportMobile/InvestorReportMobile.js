import React from "react";

class InvestorReportMobile extends React.Component {
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
      <div className={"settings-table-mobile"}>
        <table className={"settings-table reports-table"}>
          <tbody>
            <tr>
              <td>ID инвестора</td>
              <td>{this.props.id}</td>
            </tr>
            <tr>
              <td>Имя</td>
              <td>{this.props.name}</td>
            </tr>
            <tr>
              <td>Фамилия</td>
              <td>{this.props.surName}</td>
            </tr>
            <tr>
              <td>Общая мощность инвестора в данный момент (TH/s)</td>
              <td>{this.props.power}</td>
            </tr>
            <tr>
              <td>Выплачено всего</td>
              <td>{this.props.payed}</td>
            </tr>
            <tr>
              <td>Телефон</td>
              <td>{this.props.phone}</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>{this.props.email}</td>
            </tr>
          </tbody>
        </table>
        <button className={"edit-admin-button"} onClick={this.showReport}>
          Посмотреть
        </button>
      </div>
    );
  }
}

export default InvestorReportMobile;
