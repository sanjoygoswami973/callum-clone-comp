import React from "react";
import Paragraph from "../banner/Paragraph";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_main">
          <div className="footer_wrapper">
            <Paragraph
              ptext="Copyright © 2023"
              pClass="pDesign f16 tLeft white"
              pSpanT="Callum."
              pSpanC="pDesign semibold yellow"
            />
            <Paragraph
              ptext=" All Rights Reserved."
              pClass="pDesign f16 tLeft white"
            />
          </div>
          <div className="footer_wrapper">
            <Paragraph
              ptext="Designed by "
              pClass="pDesign f16 tLeft white"
              pSpanT="CaHarnish Design."
              pSpanC="pDesign semibold yellow"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
