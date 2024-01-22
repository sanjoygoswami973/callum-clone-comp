import React from "react";
import Heading2 from "../banner/Heading2";
import Heading4 from "../about/Heading4";
import Heading3 from "../about/Heading3";
import Paragraph from "../banner/Paragraph";
import R_flex from "./R_flex";
import Title from "../about/Title";

const Resume = () => {
  return (
    <div className="resume_Part">
      <div className="container">
        {/* <div className="title">
          <Heading4 h4text="Resume" h4Class="h4Design" />
          <Heading2 h2text="A summary of My Resume" h2Class="h2Design mt24" />
        </div> */}
        <Title
          heading4="Resume"
          heading2="A summary of My Resume"
          classh4v="classh4"
        />
        <R_flex />
      </div>
    </div>
  );
};

export default Resume;
