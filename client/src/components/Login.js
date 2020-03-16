import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/App.css';


function Login(props) {
    const { handleSignIn } = props;
    return (
        <div className="Login">
            <Button onClick={handleSignIn}>Sign In with Blockstack</Button>
        </div>
    );
}

export default Login;
