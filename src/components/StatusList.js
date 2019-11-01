import React from "react";
import { connect } from "react-redux";

import { Status } from "./Status";

const StatusList = ({ statusList }) => {

  const renderStatusList = () => {
    return statusList.map((status, index) => {
      return (
        <li key={index}>
          <Status status={status.status} />
        </li>
      );
    });
  };
  return (
    <div className="status_box">
      <ul>{renderStatusList()}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    statusList: state.stateList
  };
};

export default connect(mapStateToProps)(StatusList);
