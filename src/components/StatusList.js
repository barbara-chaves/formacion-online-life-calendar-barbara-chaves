import React from "react";
import { connect } from "react-redux";
import "../styles/status-list.scss";
import { selectStatus } from "../actions";
import { Status } from "./Status";

const StatusList = ({ statusList, select, selected }) => {
  const renderStatusList = () => {
    return statusList.map(status => {
      return (
        <li key={status.date} className="status__list__item">
          <Status
            status={status.status}
            date={status.date}
            message={status.message}
          />
        </li>
      );
    });
  };

  return (
    <div className="container">
      <ul className="status__list">{renderStatusList()}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  statusList: state.stateList,
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  select: status => dispatch(selectStatus(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusList);
