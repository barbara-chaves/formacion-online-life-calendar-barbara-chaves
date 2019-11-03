import React from "react";
import "../styles/status.scss";
import formatDate from '../modules/formatDate'

export const Status = ({ status, date, message }) => {
 
  return (
    <div className="status" tabindex="0">
      <div className="status__detail">
        <small className="status__detail__date">{formatDate(date)}</small>
        <small className="status__detail__message">{message}</small>
      </div>
      <div className={"status__face " + status}>
        <div className='status__face__eyes'></div>
        <div className='status__face__mouth'></div>
      </div>
    </div>
  );
};
