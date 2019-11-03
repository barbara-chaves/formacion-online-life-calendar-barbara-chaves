import React from "react";
import "../styles/status.scss";
import formatDate from '../modules/formatDate'

export const Status = ({ status, date }) => {
  return (
    <div className="status">
      <div className="status__date">
        <small className="status__date__text">{formatDate(date)}</small>
      </div>
      <div className={"status__face " + status}>
        <div className='status__face__eyes'></div>
        <div className='status__face__mouth'></div>
      </div>
    </div>
  );
};
