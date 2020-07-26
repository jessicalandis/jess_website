import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/jess_webpic.jpeg";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Artwork">Artwork</Link>
            </li>
            <li>
              <Link to="/Travel">Travel</Link>
            </li>
            <li>
              <Link to="/Coding">Coding</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
