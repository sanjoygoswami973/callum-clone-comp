import React from "react";
import Paragraph from "../banner/Paragraph";
import Heading5 from "../faq/Heading5";
import clientimg from "../../assets/images/client_img1.jpg";
const Slider = ({
  sliderPara,
  clientPara1,
  clientPara2,
  clientClass,
  clientImage,
}) => {
  return (
    <div className="clients_main">
      <Paragraph ptext={sliderPara} pClass="pDesign mt20 white" />
      <div className="clients_name">
        <img className="cimg" src={clientImage} alt="clientimg" />
        <Heading5 h5text={clientPara1} h5Class=" h5Design white f16" />
        <Paragraph ptext={clientPara2} pClass="pDesign white f16" />
      </div>
      <div className="circle_main">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Slider;
