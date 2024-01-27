import React from "react";
import "./index.css";
import Vipul from "./images/lead.jpg";
import kushal from "./images/kushal.jpg";
import gaurav from "./images/gaurav.jpg";
import { NavLink } from "react-router-dom";

const Team = () => {
  return (
    <>
      <div className="team_component">
        <div className="team_content">
          <h1>
            Bhopal Riding Community <span className="team">Team</span>{" "}
          </h1>
          <p>
            Bhopal Riding Community consist of more than 100 insipiring riders .
            We have multiple rides and meetups monthly basis to improve team
            strength. Following are the star members of our group.{" "}
          </p>
          <NavLink to="/About">
            <button className="team_btn">Know More</button>
          </NavLink>
        </div>
        <div className="team_members">
          <div className="member">
            <img src={Vipul} alt="" className="mem_img" />
            <div className="hover_content">
              <h1>Founder & Leader</h1>
              <p>Vipul Yadav</p>
            </div>
          </div>

          <div className="member">
            <img src={kushal} alt="" className="mem_img" />
            <div className="hover_content">
              <h1>Core Team</h1>
              <p>Kushal Malviya</p>
            </div>
          </div>

          <div className="member">
            <img src={gaurav} alt="" className="mem_img" />
            <div className="hover_content">
              <h1>Core Team</h1>
              <p>Gaurav Chaukikar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="exp_content">
            <h1><span className="BRC">BRC</span> Experienced Since 2010</h1>
            <p>Bhopal Riding Community is in operation since 2010 and have been invited multiple events including events for CoVID-19 along with Blood Donation Camp. </p>
        </div>
        <div className="numbers">
            <div className="num">
                <h1>50+</h1>
                <p>Experience</p>
            </div>
            <div className="num">
                <h1>20+</h1>
                <p>Community Awards</p>
            </div>
            <div className="num">
                <h1>100+</h1>
                <p>Joined Members</p>
            </div>
            <div className="num">
                <h1>10+</h1>
                <p>Operational Years</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Team;
