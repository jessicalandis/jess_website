import React, { Component } from "react";
import logo from "../logo/jesscodes.jpeg";

export default class Coding extends Component {
  render() {
    return (
      <div className="coding-container">
        <div className="coding-div">
          <h2>
            <a href="https://www.github.com/jessicalandis">
              Visit my Github Here
            </a>
          </h2>
          <img className="codingpic" src={logo} alt="image " />
        </div>
      </div>
    );
  }
}
