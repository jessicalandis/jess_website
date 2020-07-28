import React, { Component } from "react";
import pic1 from "../logo/desk.jpeg";
import AboutInfoList from "../components/about/AboutInfoList";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="info-container">
          <div className="about-img-container">
            <img src={pic1} alt="me at desk" />
          </div>
          <div className="about-text">
            <h3>Hi there! I'm Jess.</h3>
            <p>
              Welcome to my website! I'm so excited you've stopped by to check
              it out. In these pages you will what I hold nearest and dearest to
              my heart. Enjoy taking a look through my artwork and travel
              diaries. I've built this website from scratch using React, HTML,
              and CSS and am so proud to say it's all mine :)
            </p>
          </div>
        </div>
        <div className="renderedList">
          <AboutInfoList />
        </div>
      </div>
    );
  }
}
