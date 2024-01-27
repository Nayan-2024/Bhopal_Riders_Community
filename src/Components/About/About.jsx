import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { TbBulb } from "react-icons/tb";
import about1 from "./images/about_1.jpg";
import about2 from "./images/about_2.jpg";
import "./index.css";

const About = () => {
  return (
    <>
      <div className="about_component">
        <div className="about_comp">
          <div className="about_comp_content">
            <h1> <span className="head_high">Riding</span> is Not Just a Hobby , Its's a Way of Life</h1>
            <p>“Riding a bike is like an art, something you do because you feel something inside.”</p>
            <div className="vision">
              <div className="icon">
                <TbBulb />
              </div>
              <div className="vision_content">
                <h1>Our Vision</h1>
                <p>
                  Our Vision is to make BRC as the biggest riding community of
                  Madhya Pradesh.
                </p>
              </div>
            </div>
            <div className="mission">
              <div className="icon">
                <TbTargetArrow />
              </div>
              <div className="mission_content">
                <h1>Our Mission</h1>
                <p>
                  Our Mission is to let the rider get experience of riding
                  professionaly in a community.
                </p>
              </div>
            </div>
          </div>
          <div className="about_comp_images">
            <div className="image1">
              <img src={about1} />
            </div>
            <div className="image2">
              <img src={about2} alt="" />
              <div className="exp">
                <p>
                  {" "}
                  <span className="exp_no">50</span> Experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
