import React, { Component } from "react";

export default class Art extends Component {
  render() {
    const { id, img, info } = this.props.art;

    return (
      <article>
        <div className="art-piece">
          <img className="art-img-pic" src={img} alt="drawing" />
        </div>
      </article>
    );
  }
}
