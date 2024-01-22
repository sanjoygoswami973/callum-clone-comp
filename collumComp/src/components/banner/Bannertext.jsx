import React from "react";
import Heading2 from "./Heading2";
import Heading1 from "./Heading1";
import Paragraph from "./Paragraph";
import Button from "../navber/Button";
import { FaBars } from "react-icons/fa";

const Bannertext = () => {
  return (
    <>
      <Heading2
        h2text="HI, I'M A FREELANCER"
        h2Class="white f32 regular h2Design"
      />
      <Heading1 h1text="DEVELOPER" h1Class="h1Design py30" />
      <Paragraph ptext="based in Los Angeles, USA." pClass="pDesign pWhite" />
      <Button
        classBtn="btnDesign bc center mt50 py20 px48 f16"
        btext="View My Works"
      />
    </>
  );
};

export default Bannertext;
