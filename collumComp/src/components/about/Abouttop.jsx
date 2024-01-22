import React from "react";
import Heading2 from "../banner/Heading2";
import Paragraph from "../banner/Paragraph";
import Heading3 from "./Heading3";
import AboutTopLeft from "./AboutTopLeft";
import AboutTopRight from "./AboutTopRight";

const Abouttop = () => {
  return (
    <>
      <div className="aboutTop">
        <AboutTopLeft />
        <AboutTopRight />
      </div>
    </>
  );
};

export default Abouttop;
