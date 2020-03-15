import React, { Component } from 'react';
// import "../img/icons8-health-book-64.png";
import "../css/NavBar.css"

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="" className="NavBar-btn">
            <div className="NavBar-icon" id="NavBar-log-icon"></div>
            <p className="NavBar-link">Log</p>
          </a>
          <a href="" className="NavBar-btn">
            <div className="NavBar-icon" id="NavBar-news-icon"></div>
            <p className="NavBar-link">News</p>
          </a>
          <a href="" className="NavBar-btn">
            <div className="NavBar-icon" id="NavBar-chat-icon"></div>
            <p className="NavBar-link">Chat</p>
          </a>
          <a href="" className="NavBar-btn">
            <div className="NavBar-icon" id="NavBar-map-icon"></div>
            <p className="NavBar-link">Map</p>
          </a>
          <a href="" className="NavBar-btn">
            <div className="NavBar-icon" id="NavBar-settings-icon"></div>
            <p className="NavBar-link">Settings</p>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
