import React from "react";
import Aboutdetails from "./details/Aboutdetails";
import Aboutphoto from "./photo/Aboutphoto";
import "./About.css";
import Skills from "../../components/skills/Skills";
const About = () => {
  return (
    <div className="about-container">
      <Aboutdetails />
      <Skills />
    </div>
  );
};

export default About;
