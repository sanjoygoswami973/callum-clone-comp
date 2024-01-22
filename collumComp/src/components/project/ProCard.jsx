import React from "react";
import {
  FaBullhorn,
  FaChartArea,
  FaDesktop,
  FaPaintBrush,
  FaPalette,
} from "react-icons/fa";
import Heading3 from "../about/Heading3";
import Paragraph from "../banner/Paragraph";
import { LiaPencilRulerSolid } from "react-icons/lia";

const ProCard = () => {
  return (
    <div className="projectMain">
      <div className="proCard">
        <FaPalette className="proIcon" />
        <Heading3 h3text="Graphic Design" h3Class=" h3Design ph3" />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          pClass="pDesign f16 px12 lh29 mt20"
        />
      </div>

      <div className="proCard">
        <FaDesktop className="proIcon" />
        <Heading3 h3text="Web Design" h3Class=" h3Design ph3" />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          pClass="pDesign f16 px12 lh29 mt20"
        />
      </div>

      <div className="proCard">
        <LiaPencilRulerSolid className="proIcon" />
        <Heading3 h3text="UI/UX Design" h3Class=" h3Design ph3" />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          pClass="pDesign f16 px12 lh29 mt20"
        />
      </div>

      <div className="proCard">
        <FaPaintBrush className="proIcon" />
        <Heading3 h3text="App Design & Develop" h3Class=" h3Design ph3" />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          pClass="pDesign f16 px12 lh29 mt20"
        />
      </div>

      <div className="proCard">
        <FaChartArea className="proIcon" />
        <Heading3 h3text="Business Analysis" h3Class=" h3Design ph3" />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          pClass="pDesign f16 px12 lh29 mt20"
        />
      </div>

      <div className="proCard">
        <FaBullhorn className="proIcon" />
        <Heading3 h3text="SEO Marketing" h3Class=" h3Design ph3" />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          pClass="pDesign f16 px12 lh29 mt20"
        />
      </div>
    </div>
  );
};

export default ProCard;
