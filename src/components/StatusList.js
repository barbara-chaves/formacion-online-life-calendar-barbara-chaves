import React from "react";
import { connect } from "react-redux";
import "../styles/status-list.scss";
import {selectStatus} from '../actions'
import { Status } from "./Status";

const StatusList = ({ statusList, select, selected }) => {
  const message = () => {
    if (selected){
      return(
        <div className='selected'>
          <p>{selected.date}</p>
          <p>{selected.status}</p>
          {selected.message ? <p>{selected.message}</p> : null}
        </div>
      )
    }
  };

  const handleStatusClick = date => {
    const selectedStatus = statusList.find(status => status.date === date)
    select(selectedStatus)
  };

  const renderStatusList = () => {
    return statusList.map(status => {
      return (
        <li
          key={status.date}
          className="status__list__item"
          onClick={() => handleStatusClick(status.date)}
        >
          <Status status={status.status} date={status.date} />
        </li>
      );
    });
  };

  return (
    <div className="stat">
      <div className="status__message">{message()}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StatusList);
