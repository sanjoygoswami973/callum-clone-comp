import React from "react";

const Heading2 = ({ h2text, h2Class, spantext, spanClass }) => {
  return (
    <>
      <h2 className={h2Class}>{h2text}</h2>
      <span className={spanClass}>{spantext}</span>
    </>
  );
};

export default Heading2;
