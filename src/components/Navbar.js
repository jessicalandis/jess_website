import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo/jess_webpic.jpeg";
import { FaHeart } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="imgpic" src={logo} alt="image " />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaHeart className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/" onClick={this.handleToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/artwork" onClick={this.handleToggle}>
                Artwork
              </Link>
            </li>
            <li>
              <Link to="/travel" onClick={this.handleToggle}>
                Travel
              </Link>
            </li>
            <li>
              <Link to="/coding" onClick={this.handleToggle}>
                Coding
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
