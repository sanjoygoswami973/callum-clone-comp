import React from "react";

const Lilist = ({ listText, listClass }) => {
  return (
    <li>
      <a className={listClass} href="#">
        {listText}
      </a>
    </li>
  );
};

export default Lilist;
