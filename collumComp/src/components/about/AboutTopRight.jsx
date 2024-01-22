import React from "react";
import Heading3 from "./Heading3";

const AboutTopRight = () => {
  return (
    <div className="aboutTR">
      <div className="main">
        <div className="about_circle">
          <span className="spanNum">22</span>
        </div>
        <Heading3
          h3text="Years of "
          h3Class=" h3Design inlineBlock"
          spantext="Experiance"
          spanClass="h3Design bold ml14"
        />
      </div>
    </div>
  );
};

export default AboutTopRight;
