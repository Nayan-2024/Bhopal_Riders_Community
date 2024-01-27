import React from "react";
import E1 from "./images/E1.jpg";
import E2 from "./images/E2.jpg";
import E3 from "./images/E3.jpg";
import E4 from "./images/E4.jpg";
import E5 from "./images/E5.jpg";
import E6 from "./images/E6.jpg";
import E7 from "./images/E7.jpg";
import E8 from "./images/E8.mp4";
import E9 from "./images/E9.mp4";

import "./index.css";
const Events = () => {
  return (
    <div className="events_comp">
      <h1>Our Major <span className="events_head">Events</span></h1>
      <div className="images">
        <div className="row row-1">
          <div className="col-1">
            <img src={E1} alt="" className="event_img" />
            <div className="hover_content">
              <h1>New Sponsor</h1>
              <p></p>
            </div>
          </div>

          <div className="col-2">
            <img src={E4} alt="" className="event_img" />
            <div className="hover_content">
              <h1>Kawasaki Showroom</h1>
              <p></p>
            </div>
          </div>

          <div className="col-3">
            <img src={E6} alt="" className="event_img" />
            <div className="hover_content">
              <h1>Blood Donation Camp</h1>
              <p></p>
            </div>
          </div>
        </div>

        <div className="row row-2">
          <div className="col-2">
            <img src={E2} alt="" className="event_img" />
            <div className="hover_content">
              <h1>Ride to Orcha</h1>
              <p></p>
            </div>
          </div>

          <div className="col-3">
            <img src={E5} alt="" className="event_img" />
            <div className="hover_content">
              <h1>BRC X KTM Collab</h1>
              <p></p>
            </div>
          </div>

          <div className="col-1">
            <video
              className="event_video"
              width="750"
              height="500"
              controls
              autoplay
              loop
            >
              <source src={E8} type="video/mp4" />
            </video>
            <div className="hover_content">
              <h1>Founder & Leader</h1>
              <p>Vipul Yadav</p>
            </div>
          </div>
        </div>

        <div className="row row-3">
          <div className="col-3">
            <img src={E3} alt="" className="event_img" />
            <div className="hover_content">
              <h1>Bhopal Music Carnival</h1>
              <p></p>
            </div>
          </div>

          <div className="col-2">
            <img src={E7} alt="" className="event_img" />
            <div className="hover_content">
              <h1>Orcha Trip</h1>
              <p></p>
            </div>
          </div>

          <div className="col-1">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
