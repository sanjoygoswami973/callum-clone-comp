import React from "react";
import Heading2 from "../banner/Heading2";
import Heading3 from "../about/Heading3";
import Paragraph from "../banner/Paragraph";
import LeftContent from "./LeftContent";

const R_left = () => {
  return (
    <div className="r_left">
      <Heading2 h2text="My Education" h2Class="h2Design f28 tLeft" />
      <div className="resume_main">
        <LeftContent />
      </div>
    </div>
  );
};

export default R_left;
