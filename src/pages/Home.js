import React, { Component } from "react";
import pic1 from "../logo/desk.jpeg";
import AboutInfoList from "../components/about/AboutInfoList";
import { Link } from "react-router-dom";

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
              it out. I decided I needed somewhere other than Instagram to show
              my drawings
              <Link to="https://www.instagram.com/jessingsketching">
                (@jessingsketching)
              </Link>{" "}
              and what better place than a portfolio wesbite I coded myself! I
              built this website entirely on my own using JavaScript, React,
              HTML, and CSS. Enjoy taking a look through my artwork and travel
              diaries. Drop me a note on my drawing or personal Instagram if you
              want to connect (@lawofthelandis)
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
