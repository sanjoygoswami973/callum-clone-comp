import React from "react";

const Heading3 = ({ h3text, h3Class, spantext, spanClass }) => {
  return (
    <div className="textM">
      <h3 className={h3Class}>{h3text}</h3>
      <span className={spanClass}>{spantext}</span>
    </div>
  );
};

export default Heading3;
