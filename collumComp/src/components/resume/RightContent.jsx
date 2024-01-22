import React from "react";
import Heading3 from "../about/Heading3";
import Paragraph from "../banner/Paragraph";

const RightContent = () => {
  return (
    <>
      <div className="content">
        <Heading3
          h3text="Sr. Font End Developer"
          h3Class=" h3Design inlineBlock f21"
        />
        <Paragraph
          ptext="Apple Inc / 2020 - current"
          pClass="pDesign f16 tLeft"
        />
        <Paragraph
          ptext="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
          pClass="pDesign f16 lh29 mt20 tLeft pr10"
        />
      </div>

      <div className="content">
        <Heading3
          h3text="Jr. Font End Developer"
          h3Class=" h3Design inlineBlock f21"
        />
        <Paragraph
          ptext="Dribbble Inc / 2018 - 2020"
          pClass="pDesign f16 tLeft"
        />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
          pClass="pDesign f16 lh29 mt20 tLeft pr10"
        />
      </div>

      <div className="content">
        <Heading3 h3text="HTML Developer" h3Class=" h3Design inlineBlock f21" />
        <Paragraph ptext="Adobe Inc / 2017 - 2018" pClass="pDesign f16 tLeft" />
        <Paragraph
          ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
          pClass="pDesign f16 lh29 mt20 tLeft pr10"
        />
      </div>
    </>
  );
};

export default RightContent;
