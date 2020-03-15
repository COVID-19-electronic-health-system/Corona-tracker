import React from 'react';
import '../css/App.css';


function Login(props) {
    const { handleSignIn } = props;
    return (
        <div className="Login">
            <button onClick={handleSignIn}>Sign In with Blockstack</button>
        </div>
    );
}

export default Login;
