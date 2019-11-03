import React from "react";
import "../styles/ministatus.scss";

export const MiniStatus = ({ status, selected }) => {
  return (
    <div className="ministatus">
      <div className={"ministatus__face " + status + ' ' + selected}>
        <div className="ministatus__face__eyes"></div>
        <div className="ministatus__face__mouth"></div>
      </div>
    </div>
  );
};
