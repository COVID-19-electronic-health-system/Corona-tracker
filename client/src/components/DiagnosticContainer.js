import React from 'react';
import '../css/App.css'
import '../css/DiagnosticContainer.css'
import '../css/themePalette.css'
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg'
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg'
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Temperature from './Temperature';

const dateOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

function DiagnosticContainer(props) {
    const { handleSignOut, userSession } = props;
    var today = new Date();
    return (
        <div className="DiagnosticContainer">
            <NavBar />
            <Container>
                <Row className="LogoRow">
                    <Col xs={2} md={2} lg={2} xl={2}>
                        <Logo className="DiagnosticLogo" />
                    </Col>
                    <Col xs={10} md={2} lg={2} xl={2}>
                        <TextLogo className="DiagnosticTextLogo" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="DiagnosticText">Welcome, <b>{userSession.loadUserData().profile.name}</b>!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="DiagnosticSubText">Today's date is {today.toLocaleDateString("en-US", dateOptions)}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr style={{ borderBottom: 'solid 0.5vh black', width: '20vw' }} />
                    </Col>
                </Row>
            </Container>
            <Temperature />
            <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
    );
}

export default DiagnosticContainer;
