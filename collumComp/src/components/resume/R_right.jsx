import React from "react";
import Heading2 from "../banner/Heading2";
import Heading3 from "../about/Heading3";
import Paragraph from "../banner/Paragraph";
import RightContent from "./RightContent";

const R_right = () => {
  return (
    <div className="r_right">
      <Heading2 h2text="My Experience" h2Class="h2Design f28 tLeft" />
      <div className="resume_main">
        <RightContent />
      </div>
    </div>
  );
};

export default R_right;
