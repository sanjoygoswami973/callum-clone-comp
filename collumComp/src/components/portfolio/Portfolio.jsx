import React from "react";
import Title from "../about/Title";
import Lilist from "./Lilist";
import image from "../../assets/images/portfolio_img1.jpg";
import { FaFileAlt, FaImage, FaVideo } from "react-icons/fa";
import Item_card from "./Item_card";
import image2 from "../../assets/images/portfolio_img2.jpg";
import image3 from "../../assets/images/portfolio_img3.jpg";
import image4 from "../../assets/images/portfolio_img4.jpg";
import image5 from "../../assets/images/portfolio_img5.jpg";
import image6 from "../../assets/images/portfolio_img6.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio_part">
      <div className="container">
        <Title
          heading4="Portfolio"
          heading2="Some of my most recent projects"
        />
        <div className="projects">
          <div className="project_title">
            <ul className="pUl">
              <Lilist listText="All" listClass="listDesign liBorder" />
              <Lilist listText="Details" listClass="listDesign" />
              <Lilist listText="Mockups" listClass="listDesign" />
              <Lilist listText="Youtube Videos" listClass="listDesign" />
              <Lilist listText="Vimeo Videos" listClass="listDesign" />
            </ul>
          </div>
          <div className="allProjects">
            <Item_card
              item_para1="Detailed Project 1"
              item_para2="Category"
              item_img={image}
              item_icon={<FaFileAlt className="portIcon" />}
            />
            <Item_card
              item_para1="Mockups Design 1"
              item_para2="Category"
              item_img={image2}
              item_icon={<FaImage className="portIcon" />}
            />
            <Item_card
              item_para1="YouTube Video"
              item_para2="Category"
              item_img={image3}
              item_icon={<FaVideo className="portIcon" />}
            />
            <Item_card
              item_para1="Vimeo Video"
              item_para2="Category"
              item_img={image4}
              item_icon={<FaVideo className="portIcon" />}
            />
            <Item_card
              item_para1="Detailed Project 2"
              item_para2="Category"
              item_img={image5}
              item_icon={<FaFileAlt className="portIcon" />}
            />
            <Item_card
              item_para1="Mockups Design 2"
              item_para2="Category"
              item_img={image6}
              item_icon={<FaImage className="portIcon" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
