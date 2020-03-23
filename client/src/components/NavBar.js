import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import "../css/themePalette.css";
import "../css/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className='nav-container'>
        <Nav className="theme-Palette-red-bg navBar">
          <Nav.Item className="NavBar-item">
            <Nav.Link href='/log'>
              <div className="NavBar-icon" id="NavBar-log-icon"></div>
              <p className="NavBar-link theme-Palette-white-text">Log</p>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="NavBar-item">
            <Nav.Link href='/education'>
              <div className="NavBar-icon" id="NavBar-news-icon"></div>
              <p className="NavBar-link theme-Palette-white-text">Education</p>
            </Nav.Link>
          </Nav.Item>


          <Nav.Item className="NavBar-item">
            <Nav.Link href='/map'>
              <div className="NavBar-icon" id="NavBar-map-icon"></div>
              <p className="NavBar-link theme-Palette-white-text">Map</p>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="NavBar-item">
            <Nav.Link href='/settings'>
              <div className="NavBar-icon" id="NavBar-settings-icon"></div>
              <p className="NavBar-link theme-Palette-white-text">Settings</p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default NavBar;
