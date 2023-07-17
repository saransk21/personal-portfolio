import React from "react";
import "./skills.css";
import Skill from "./Skill/Skill";
const Skills = () => {
  let data = [
    {
      img: "https://img.icons8.com/?size=512&id=20909&format=png",
      title: "HTML",
    },
    {
      img: "https://img.icons8.com/?size=512&id=21278&format=png",
      title: "CSS",
    },
    {
      img: "https://img.icons8.com/?size=512&id=108784&format=png",
      title: "JavaScript",
    },
    {
      img: "https://img.icons8.com/?size=512&id=123603&format=png",
      title: "ReactJS",
    },
    {
      img: "https://img.icons8.com/?size=512&id=13679&format=png",
      title: "Java",
    },
    {
      img: "https://img.icons8.com/?size=512&id=20906&format=png",
      title: "GIT",
    },
    {
      img: "https://img.icons8.com/?size=512&id=38561&format=png",
      title: "PostgreSQl",
    },
  ];
  return (
    <div className="skills__container">
      <div className="skills_container-title">
        <h1>SKILLS</h1>
      </div>
      <div className="skills__container-data">
        {data.map((dat) => (
          <Skill img={dat.img} title={dat.title} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
