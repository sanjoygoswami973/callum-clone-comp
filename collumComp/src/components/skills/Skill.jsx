import React from "react";
import Heading2 from "../banner/Heading2";
import Paragraph from "../banner/Paragraph";
import Button from "../navber/Button";
import Title from "../about/Title";
import Progress from "./Progress";

const Skill = () => {
  return (
    <div className="skill_part">
      <div className="container">
        <Title heading2="My Skills" classh2v="tLeft f28" />
        <div className="skill_flex mt50 rg40">
          <Progress para1="Web Design" para2="65%" prog_width="w65" />
          <Progress para1="HTML/CSS" para2="95%" prog_width="w95" />
          <Progress para1="JavaScript" para2="80%" prog_width="w80" />
          <Progress para1="React JS" para2="70%" prog_width="w70" />
          <Progress para1="Angular Js" para2="60%" prog_width="w60" />
          <Progress para1="Bootstrap" para2="99%" prog_width="w99" />
        </div>
      </div>
      <Button
        classBtn="btnDesign black mt75 center mt50 py20 px48 f16 medium skillBtn"
        btext="Download CV"
      />
    </div>
  );
};

export default Skill;
