import React, { Component } from "react";

export default class AboutInfo extends Component {
  render() {
    const { id, img, info } = this.props.about;

    return (
      <section className="about-info1">
        <img className="about-img-pic" src={img} alt="me" />
        <p className="about-p">{info}</p>
      </section>
    );
  }
}
