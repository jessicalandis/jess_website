import React, { Component } from "react";
import TravelList from "../components/travel/TravelList";
export default class Travel extends Component {
  render() {
    return (
      <div className="travel-comp">
        <TravelList />
      </div>
    );
  }
}
