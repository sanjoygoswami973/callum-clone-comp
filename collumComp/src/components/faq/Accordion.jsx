import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Heading5 from "./Heading5";
import Paragraph from "../banner/Paragraph";

const Accordion = ({ accordHead, accordPara }) => {
  return (
    <div className="flex_main">
      <div className="faq_one">
        <FaAngleDown className="rotate" />
        <Heading5 h5text={accordHead} h5Class=" h5Design" />
      </div>
      <Paragraph ptext={accordPara} pClass="pDesign faqp" />
    </div>
  );
};

export default Accordion;
