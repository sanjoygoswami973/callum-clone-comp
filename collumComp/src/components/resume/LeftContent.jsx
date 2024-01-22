import React from "react";
import Heading3 from "../about/Heading3";
import Paragraph from "../banner/Paragraph";

const LeftContent = () => {
  return (
    <>
      <div className="content">
        <Heading3
          h3text="Master in Computer Engineering"
          h3Class=" h3Design inlineBlock f21"
        />
        <Paragraph
          ptext="Harvard University / 2015 - 2017"
          pClass="pDesign f16 tLeft"
        />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
          pClass="pDesign f16 lh29 mt20 tLeft pr10"
        />
      </div>

      <div className="content">
        <Heading3
          h3text="Bachelor in Computer Engineering"
          h3Class=" h3Design inlineBlock f21"
        />
        <Paragraph
          ptext="University of California / 2014 - 2015"
          pClass="pDesign f16 tLeft"
        />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
          pClass="pDesign f16 lh29 mt20 tLeft pr10"
        />
      </div>

      <div className="content">
        <Heading3
          h3text="International Science"
          h3Class=" h3Design inlineBlock f21"
        />
        <Paragraph
          ptext="Harvard University / 2013 - 2014"
          pClass="pDesign f16 tLeft"
        />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
          pClass="pDesign f16 lh29 mt20 tLeft pr10"
        />
      </div>
    </>
  );
};

export default LeftContent;
