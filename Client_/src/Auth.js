import { useState } from "react";
import { useHistory } from 'react-router-dom';
const axios = require('axios').default;

const Auth = () => {
    const history = useHistory();
    axios.get("http://localhost:5000/auth")
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    function onsubmitclk() {
        history.push('/menu');
    }
    return (
        <div className="Auth">
            <h1 style={{ margin: 0 }}>You Have been Given Attendence!!! ✅✅</h1>
            <form method="GET" onSubmit={onsubmitclk}>
                <button class="clk">CLICK ME</button><br />
            </form>
            <button class="arw">⬅️</button>
        </div >
    );
}

export default Auth;