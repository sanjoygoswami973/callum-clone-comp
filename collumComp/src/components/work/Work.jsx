import React from "react";
import Button from "../navber/Button";
import Heading2 from "../banner/Heading2";

const Work = () => {
  return (
    <div className="work_part">
      <div className="work_text">
        <div className="work_overlay">
          <Heading2
            h2text="Interested in working with me?"
            h2Class="h2Design white"
          />
          <Button classBtn=" workbtn" btext="Hire Me!" />
        </div>
      </div>
    </div>
  );
};

export default Work;
