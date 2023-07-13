import React from "react";
import "./project.css";
import ProjectPrimary from "./ProjectPrimary/ProjectPrimary";
import ProjectSecondary from "./ProjectSecondary/ProjectSecondary";

const Project = () => {
  return (
    <div className="project-container" id="projects">
      <div className="project-title">
        <h1>Projects</h1>
        <hr />
      </div>
      <div className="project-about">
        <ProjectPrimary
          name={"Blog Application"}
          des={
            "Built on the React, the application provides a user-friendly interface for creating and managing blog posts. Firebase is used for seamless authentication, allowing users to login using google account. Additionally, Firebase's firestore database ensures efficient storage and retrieval of blog post data."
          }
          imgUrl={
            "https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565_1280.png"
          }
          url={""}
        />
        <ProjectSecondary
          name={"News App"}
          des={
            "Built with React Native, the app offers a cross-platform experience, compatible with both iOS and Android devices. By integrating the News API, the application retrieves up-to-date news articles from various sources and categories. The search feature enables users to search for specific news topics or keywords, providing a tailored news browsing experience."
          }
          imgUrl={
            "https://img.freepik.com/free-vector/female-hands-holding-mobile-phone-with-newsletter-screen-woman-reading-world-news-using-smartphone-app-internet-flat-vector-illustration-newspaper-information-press-media-concept_74855-24529.jpg?w=1060&t=st=1689169633~exp=1689170233~hmac=7892af6a05c0549fd77f2a750241a9b5fed2fb25c0ee0ee554d153f7ce1987da"
          }
        />
        <ProjectPrimary
        
          name={"Movie List Application"}
          des={
              "The Movie List application is a user-friendly web application developed using the React JavaScript library and integrated with Firebase. This application allows users to create and manage their favorite movie lists effortlessly.Users can sign up or log in to the application using their credentials, which are securely stored and authenticated through Firebase's authentication service."
          }
          imgUrl={
            "https://img.freepik.com/free-vector/video-upload-concept-illustration_114360-6773.jpg?w=740&t=st=1689223460~exp=1689224060~hmac=384a5ddccad5ebdd4b49837981aaee49b9981b17a5a1e0475c97e275e3e9e86d"
          }
        />
      </div>
    </div>
  );
};

export default Project;
