import React from "react";
import Heading4 from "./Heading4";
import Heading2 from "../banner/Heading2";

const Title = ({ heading4, heading2, classh4v, classh2v }) => {
  return (
    <div className="title mb90">
      <div>
        <h4 className={`h4Design ${classh4v}`}>{heading4}</h4>
        <h2 className={`h2Design ${classh2v}`}>{heading2}</h2>
      </div>
    </div>
  );
};

export default Title;
