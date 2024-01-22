import React from "react";

const Paragraph = ({ ptext, pClass, pSpanT, pSpanC }) => {
  return (
    <>
      <p className={pClass}>{ptext}</p>
      <span className={pSpanC}>{pSpanT}</span>
    </>
  );
};

export default Paragraph;
