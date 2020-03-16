import React, { Component } from 'react';
import { Nav }  from 'react-bootstrap';
import "../css/NavBar.css"

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Nav.Item>
          <Nav.Link>
            <div className="NavBar-icon" id="NavBar-log-icon"></div>
            <p className="NavBar-link">Log</p>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <div className="NavBar-icon" id="NavBar-news-icon"></div>
            <p className="NavBar-link">News</p>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <div className="NavBar-icon" id="NavBar-chat-icon"></div>
            <p className="NavBar-link">Chat</p>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <div className="NavBar-icon" id="NavBar-map-icon"></div>
            <p className="NavBar-link">Map</p>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <div className="NavBar-icon" id="NavBar-settings-icon"></div>
            <p className="NavBar-link">Settings</p>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavBar;
