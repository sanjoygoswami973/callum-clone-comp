import React from "react";
import Heading4 from "../about/Heading4";
import Heading2 from "../banner/Heading2";
import ProjectMain from "./ProjectMain";
import Title from "../about/Title";

const Project = () => {
  return (
    <div className="projectPart">
      <div className="container">
        {/* <div className="title mb124">
          <Heading4 h4text="What I Do?" h4Class="h4Design" />
          <Heading2
            h2text="How I can help your next project"
            h2Class="h2Design mt24"
          />
        </div> */}
        <Title
          heading4="What I Do?"
          heading2="How I can help your next project"
          classh4v="classh4"
          classh2v="classh2"
        />

        <ProjectMain />
      </div>
    </div>
  );
};

export default Project;
