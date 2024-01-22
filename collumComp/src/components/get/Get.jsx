import React from "react";
import Heading2 from "../banner/Heading2";
import Title from "../about/Title";
import Paragraph from "../banner/Paragraph";
import Heading5 from "../faq/Heading5";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaArrowRight,
} from "react-icons/fa";
import Form_input from "./Form_input";
import Button from "../navber/Button";

const Get = () => {
  return (
    <div className="get_part">
      <div className="container">
        <div className="get_main">
          <div className="get_details">
            <Title heading2="Have any questions?" classh2v="tLeft" />
            <Paragraph
              ptext="I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up."
              pClass="pDesign tLeft w526 mb60"
            />
            <Paragraph ptext="Living In:" pClass="pDesign tLeft semibold" />
            <Heading5
              h5text="30 Shacham street, Los Angeles, USA."
              h5Class=" h5Design regular"
            />
            <Paragraph ptext="Call:" pClass="pDesign tLeft semibold mt32" />
            <Heading5 h5text="(+060) 444 434 444" h5Class=" h5Design regular" />
            <div className="sMedia_icon mt75">
              <FaTwitter className="f32 smicon" />
              <FaFacebook className="f32 smicon" />
              <FaInstagram className="f32 smicon" />
              <FaGithub className="f32 smicon" />
              <FaDribbble className="f32 smicon" />
            </div>
          </div>
          <div className="get_forms">
            <Title heading2="Have any questions?" classh2v="tLeft" />
            <form action="" className="get_form">
              <Form_input levelHead="What is Your Name:" />
              <Form_input levelHead="Your Email Address:" />
              <Form_input levelHead="How can I Help you?:" lavelClass="pb100" />
            </form>
            <Button
              classBtn=" workbtn black white align"
              btext="Send"
              fromIcon={<FaArrowRight />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get;
