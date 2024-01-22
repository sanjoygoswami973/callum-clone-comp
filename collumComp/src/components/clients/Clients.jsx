import React from "react";
import Title from "../about/Title";
import Paragraph from "../banner/Paragraph";
import clientimg from "../../assets/images/client_img1.jpg";
import Heading5 from "../faq/Heading5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "./Slider";

const Clients = () => {
  return (
    <div className="clients_part">
      <Title
        heading4="Client Speak"
        heading2="What Some of my Clients Say"
        classh2v="white"
      />
      <Slider
        sliderPara="“Easy to use, reasonably priced simply dummy text of the printing and
          typesetting industry. Quidam lisque persius interesset his et, in quot
          quidam possim iriure. simply dummy text of the printing and
          typesetting industry.”"
        clientPara1="Jay Shah"
        clientPara2="Founder at Icomatic Pvt Ltd"
        clientImage={clientimg}
        clientClass=""
      />
      <div className="client_icon">
        <div className="icon_box">
          <MdKeyboardArrowLeft className="f30" />
        </div>
        <div className="icon_box">
          <MdKeyboardArrowRight className="f30" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
