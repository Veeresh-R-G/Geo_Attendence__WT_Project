
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Register = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        hostelCode: ""
    });

    let name;
    let value;
    const handleInput = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    /*

        ---TESTING PURPOSES---
        console.log(user);

    */


    let username = user.username;
    let password = user.password;
    let email = user.email;
    let hostelCode = user.hostelCode;


    //Axios To establish Connection with Back-end;
    axios.defaults.baseURL = "http://localhost:5000";


    const axiosClick = () => {
        axios.post('/register',
            {
                username: username,
                password: password,
                email: email,
                code: hostelCode
            })
            .then((response) => {
                const data = response.data;
                alert("data==", data);

            })

            .catch(() => {
                console.log("this is catch");
            })
    }
    // history.push('/menu');

    return (
        <div className="register">
            <div className="form">
                <form className="regform" method="GET">
                    <h2>REGISTER</h2>
                    <label>USERNAME</label><br />
                    <input value={user.username} onChange={handleInput} type="text" name="username" /><br />

                    <label>PASSWORD</label><br />
                    <input value={user.password} onChange={handleInput} type="password" name="password" id="" /><br />

                    <label htmlFor="email">E-MAIL</label><br />
                    <input value={user.email} onChange={handleInput} type="email" name="email" /><br />

                    <label htmlFor="hcode">HOSTEL CODE</label><br />
                    <input value={user.hostelCode} onChange={handleInput} type="text" name="hostelCode" /><br />


                    <button onClick={axiosClick}>SUBMIT</button> <br />
                </form>
            </div>
        </div>
    );
}

export default Register;