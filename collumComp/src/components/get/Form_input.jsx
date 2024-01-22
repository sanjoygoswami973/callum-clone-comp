import React from "react";

const Form_input = ({ levelHead, lavelClass }) => {
  return (
    <>
      <label className={`h5Design f16 ${lavelClass}`} htmlFor="">
        {levelHead}
      </label>
      <input type="text" />
    </>
  );
};

export default Form_input;
