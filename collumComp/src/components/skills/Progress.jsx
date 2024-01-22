import React from "react";

const Progress = ({ prog_width, para1, para2 }) => {
  return (
    <div className="w50">
      <div className="skillHeading h3Design f16 mt mb20">
        <p>{para1}</p>
        <p>{para2}</p>
      </div>
      <div className="two">
        <div className={`progress_bar ${prog_width}`}></div>
      </div>
    </div>
  );
};

export default Progress;
