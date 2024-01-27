import React from "react";
import About from "../../Components/About/About";
import Team from "../../Components/Team/Team";
import homeimg from "./images/homeimg.jpg";
import Sponsor from "../../Componentsp,/Sponsors/sponsor";
import Events from "../../Components/Events/Events";
import { TbCertificate2 } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiSemanticweb } from "react-icons/si";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="home_section">
        <div className="home">
          <div className="home_image">
            <img src={homeimg} />
          </div>
          <div className="content">
            <h1>
              A <span className="head_high">Biking CoMmunity</span> Will Change
              Your Life
            </h1>
          </div>
        </div>
      </div>
      <div className="why_section">
        <div className="why">

          <div className="block ">
            <div className="why_img block1">
              <MdOutlineHealthAndSafety />
            </div>
            <h1>Safety</h1>
            <p>
              In BRC every ride safety gears are madndaory like as helmet for
              safety.
            </p>
          </div>

          <div className="block ">
            <div className="why_img block2">
              <SiSemanticweb/>
            </div>
            <h1>Professional</h1>
            <p>
              BRC focus on professional rides with lead,triaffic blocker in
              rides.
            </p>
          </div>

          <div className="block ">
            <div className="why_img block1">
              <TbCertificate2 />
            </div>
            <h1>Certified</h1>
            <p>BRC is listed as profession biking community in bhopal forum.</p>
          </div>

          <div className="whyus">
            <h1>Why Choose BRC</h1>
            <p>BRC is the leading and emerging biking community of bhopal.</p>
          </div>
        </div>
      </div>
      <About/>
      <Team/>
      <Sponsor/>
      <Events/>
    </>
  );
};

export default Home;
