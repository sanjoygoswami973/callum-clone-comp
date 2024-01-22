import React from "react";
import Title from "../about/Title";
import { FaAngleDown } from "react-icons/fa6";
import Heading5 from "./Heading5";
import Paragraph from "../banner/Paragraph";
import Accordion from "./Accordion";
import faqimage from "../../assets/images/question_img.png";

const Faq = () => {
  return (
    <div className="faq_part">
      <div className="container">
        <div className="faq_main">
          <div className="faq_left">
            <Title
              heading4="FAQ"
              heading2="Have any questions?"
              classh4v="m0"
              classh2v="tLeft"
            />
            <Accordion
              accordHead="What is Callum?"
              accordPara="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet."
            />
            <Accordion
              accordHead="How Can I Help You?"
              accordPara="Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo."
            />
            <Accordion
              accordHead="Simple process for workflow?"
              accordPara="Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet."
            />
            <Accordion
              accordHead="Is Callum a Multi-purpose template?"
              accordPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
            />
            <Accordion
              accordHead="Why responsive one page template?"
              accordPara="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo."
            />
          </div>
          <div className="faq_right">
            <img src={faqimage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
