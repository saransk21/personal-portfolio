import React from "react";
import "./AboutPhoto.css";
import img from './img.png'
const Aboutphoto = () => {
  return (
    <div className="about-photo__container">
      <svg
        width="524"
        height="524"
        viewBox="0 0 524 524"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="262" cy="262" r="262" fill="#FDC435" />
      </svg>
      <img src={img} width={300}/>
    </div>
  );
};

export default Aboutphoto;
