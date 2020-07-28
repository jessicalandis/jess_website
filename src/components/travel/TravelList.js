import React, { Component } from "react";
import Travel1 from "../travel/Travel1";
import { cityData } from "../../cityData";

export default class TravelList extends Component {
  state = {
    cities: cityData,
  };

  render() {
    const { cities } = this.state;

    return (
      <section className="cityList">
        {cities.map((city) => (
          <Travel1 city={city} />
        ))}
      </section>
    );
  }
}
