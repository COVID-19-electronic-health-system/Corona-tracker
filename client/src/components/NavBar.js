import React, { Component } from 'react';
import { Nav }  from 'react-bootstrap';
import "../css/themePalette.css";
import "../css/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Nav className="theme-Palette-red-bg nav-bar">
        <Nav.Item className="NavBar-item">
          <Nav.Link>
            <div className="NavBar-icon" id="NavBar-log-icon"></div>
            <p className="NavBar-link theme-Palette-white-text">Log</p>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="NavBar-item">
          <Nav.Link>
            <div className="NavBar-icon" id="NavBar-news-icon"></div>
            <p className="NavBar-link theme-Palette-white-text">News</p>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="NavBar-item">
          <Nav.Link>
            <div className="NavBar-icon" id="NavBar-chat-icon"></div>
            <p className="NavBar-link theme-Palette-white-text">Chat</p>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="NavBar-item">
          <Nav.Link>
            <div className="NavBar-icon" id="NavBar-map-icon"></div>
            <p className="NavBar-link theme-Palette-white-text">Map</p>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="NavBar-item">
          <Nav.Link>
            <div className="NavBar-icon" id="NavBar-settings-icon"></div>
            <p className="NavBar-link theme-Palette-white-text">Settings</p>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavBar;
