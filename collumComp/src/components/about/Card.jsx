import React from "react";
import Paragraph from "../banner/Paragraph";

const Card = () => {
  return (
    <>
      <div className="card">
        <Paragraph ptext="Name:" pClass="pDesign tLeft cardP1" />
        <Paragraph ptext="Callum Smith" pClass="pDesign tLeft cardP2" />
      </div>
      <div className="card">
        <Paragraph ptext="Email:" pClass="pDesign tLeft cardP1" />
        <Paragraph
          ptext="chat@callum.com"
          pClass="pDesign tLeft cardP2 underline"
        />
      </div>
      <div className="card">
        <Paragraph ptext="Date of birth:" pClass="pDesign tLeft cardP1" />
        <Paragraph ptext="11 November, 1987" pClass="pDesign tLeft cardP2" />
      </div>
      <div className="card">
        <Paragraph ptext="From:" pClass="pDesign tLeft cardP1" />
        <Paragraph ptext="Los Angeles, USA." pClass="pDesign tLeft cardP2" />
      </div>
    </>
  );
};

export default Card;
