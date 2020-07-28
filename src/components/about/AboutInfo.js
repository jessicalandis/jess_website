import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AboutInfo extends Component {
  render() {
    const { id, img, info, more, click } = this.props.about;

    return (
      <div className="about-info1">
        <Link to={click}>
          <img className="about-img-pic" src={img} alt="me" />
        </Link>
        <h3 className="about-h3">{info}</h3>
        <p className="about-p">{more}</p>
      </div>
    );
  }
}
