import React from "react";
import Heading2 from "../banner/Heading2";
import Paragraph from "../banner/Paragraph";

const AboutTopLeft = () => {
  return (
    <>
      <div className="aboutTL">
        <Heading2
          h2text="Hi, I'm"
          h2Class="tLeft f32 regular h2Design inlineBlock"
          spantext="Callum Smith"
          spanClass="bold tLeft f32 regular h2Design ml14 bb"
        />
        <Paragraph
          ptext="I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto."
          pClass="pDesign tLeft w864 mt20"
        />
      </div>
    </>
  );
};

export default AboutTopLeft;
