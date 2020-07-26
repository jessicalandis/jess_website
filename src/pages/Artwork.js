import React, { Component } from "react";
import ArtList from "../components/artwork/ArtList";

export default class Artwork extends Component {
  render() {
    return (
      <div className="artwork-page">
        <ArtList />
      </div>
    );
  }
}
