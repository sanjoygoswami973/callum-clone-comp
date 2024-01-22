import React from "react";
import Contact from "./Contact";
import Button from "./Button";
import Logo from "./Logo";
// import Contact from "./components/Contact";
// import Button from "./components/navber/Button";
// import Logo from "./components/navber/Logo";
import { FaBars, FaPhone } from "react-icons/fa";

const Navber = () => {
  return (
    <div className="navberMain">
      <div className="container flex py26">
        <div className="left">
          <Logo />
        </div>
        <div className="right">
          <Contact
            text="(060) 444 434 444"
            icons={<FaPhone className="white" />}
            classCont="conDesign"
          />
          <Button Bicon={<FaBars />} classBtn="btnDesign white" />
        </div>
      </div>
    </div>
  );
};

export default Navber;
