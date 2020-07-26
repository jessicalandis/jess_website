import React, { Component } from "react";
import AboutInfo from "./AboutInfo";
import { aboutData } from "../../aboutData";

export default class AboutInfoList extends Component {
  state = {
    about: aboutData,
  };
  render() {
    const { about } = this.state;
    return (
      <div className="about-list-1">
        {about.map((about) => (
          <AboutInfo about={about} />
        ))}
      </div>
    );
  }
}
