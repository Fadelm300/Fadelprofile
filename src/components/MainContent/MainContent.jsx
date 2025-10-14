import React from "react";
import "./MainContent.css";
import rightImage from "../../assets/ST3_4992 copy.jpg";

const MainContent = () => {
  return (
    <section >
      <div ></div>
      <div className="content-wrapper">
        

        <div className="text-section">
          <h2 className="title">Hi, I’m </h2>
          <h2 className="title">Fadel M Moussa</h2>
          <p className="description">
I’m a Software Engineer driven by passion, creativity, and innovation. I strive to craft impactful solutions that solve problems, inspire change, and contribute positively to the community, turning ideas into reality through thoughtful design, continuous growth, and purposeful development.          </p>
          <button className="cta-button">Check Resume</button>
        </div>
<div className="profile-image right-image">
          <img src={rightImage} alt="right Visual" />
        </div>
       
      </div>
     
      
    </section>
  );
};

export default MainContent;
