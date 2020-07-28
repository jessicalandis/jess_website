import React, { Component } from "react";
import pic1 from "../logo/jesspropic1.jpeg";
import AboutInfoList from "../components/about/AboutInfoList";
import { Link } from "react-router-dom";
import { FaRegSmile } from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="info-container">
          <div className="about-img-container">
            <img src={pic1} alt="me at desk" />
          </div>
          <div className="about-text">
            <h2>Hi there! I'm Jess.</h2>
            <p>
              Welcome to my website! I'm so excited you've stopped by to check
              it out. I decided I needed somewhere other than Instagram to show
              my drawings and what better place than a portfolio website I coded
              myself! Not only can I show off my artwork, but my coding skills
              as well! Talk about killing two birds with one stone (minus the
              actual harming of birds, of course.) I built this website entirely
              on my own using JavaScript, React, HTML, and CSS. Enjoy taking a
              look through my artwork and travel diaries. Drop me a note on
              Instagram on my drawing{" "}
              <a href="https://www.instagram.com/jessingsketching">
                (@jessingsketching)
              </a>{" "}
              or personal{" "}
              <a href="https://www.instagram.com/lawofthelandis">
                (@lawofthelandis)
              </a>{" "}
              account if you want. Also feel free to connect on {""}
              <a href="https://www.linkedin.com/in/jessica-landis-1b40b984/">
                LinkedIn
              </a>
              {""} for any professional inquiries <FaRegSmile />
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
