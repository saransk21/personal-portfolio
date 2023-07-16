import React from "react";
import "./Skill.css";
const Skill = ({img,title}) => {
  return (
    <div className="skill__container">
        <img src={img} alt="img"/>
        <p>{title}</p>
      
    </div>
  );
};

export default Skill;
