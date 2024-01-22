import React from "react";

const Contact = ({ text, icons, classCont }) => {
  return (
    <a href="#" className={classCont}>
      {icons}
      {text}
    </a>
  );
};

export default Contact;
