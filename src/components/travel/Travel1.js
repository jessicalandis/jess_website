import React, { Component } from "react";

export default class Travel extends Component {
  render() {
    const { id, city, img, name, date, info } = this.props.city;
    console.log({ img });
    return (
      <article className="allcities">
        <div className="travel-img-container">
          <img className="travel-img-pic" src={img} alt="image of city" />
        </div>
        <div className="travel-text-container">
          <h1>{name}</h1>
          <h4>{date}</h4>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}
