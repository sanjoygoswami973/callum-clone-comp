import React from "react";
import Title from "./Title";
import Abouttop from "./Abouttop";
import AboutBottom from "./AboutBottom";

const About = () => {
  return (
    <div className="aboutPart">
      <div className="container">
        <Title heading4="About Me" heading2="Know Me More" classh4v="classh4" />
        <Abouttop />
        <AboutBottom />
      </div>
    </div>
  );
};

export default About;
