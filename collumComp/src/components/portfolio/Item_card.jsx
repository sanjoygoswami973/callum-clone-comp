import React from "react";
import Paragraph from "../banner/Paragraph";
import { FaFileAlt } from "react-icons/fa";
import image from "../../assets/images/portfolio_img1.jpg";

const Item_card = ({ item_para1, item_para2, item_img, item_icon }) => {
  return (
    <div className="item">
      <img src={item_img} className="w100 block" />
      <div className="item_overlay">
        <div className="item_main">
          {item_icon}
          <Paragraph ptext={item_para1} pClass={`pDesign pWhite mt24 mb10`} />
          <Paragraph ptext={item_para2} pClass={`pDesign pWhite f16 regular`} />
        </div>
      </div>
    </div>
  );
};

export default Item_card;
