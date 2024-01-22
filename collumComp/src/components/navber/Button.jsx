import React from "react";

const Button = ({ Bicon, classBtn, btext, fromIcon }) => {
  return (
    <button className={classBtn}>
      {Bicon}
      {btext}
      {fromIcon}
    </button>
  );
};

export default Button;
