import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer">
          Made with <FaHeart /> in 2020 by Jess
        </div>
      </div>
    );
  }
}
