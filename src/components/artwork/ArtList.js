import React, { Component } from "react";
import Art from "./Art";
import { artData } from "../../artData";

export default class ArtList extends Component {
  state = {
    art: artData,
  };
  render() {
    const { art } = this.state;
    return (
      <section className="art-list">
        <div className="art-list-1">
          {art.map((art) => (
            <Art art={art} />
          ))}
        </div>
        <p>
          For more of my artwork, check out {""}
          <a href="https://www.instagram.com/jessingsketching" target="_blank">
            @jessingsketching
          </a>
        </p>
      </section>
    );
  }
}
