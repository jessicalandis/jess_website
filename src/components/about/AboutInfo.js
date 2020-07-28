import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AboutInfo extends Component {
  render() {
    const { id, img, info, click } = this.props.about;

    return (
      <div className="about-info1">
        <Link to={click}>
          <img className="about-img-pic" src={img} alt="me" />
        </Link>
        <p className="about-p">{info}</p>
      </div>
    );
  }
}
