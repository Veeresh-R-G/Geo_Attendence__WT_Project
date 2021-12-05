
import { useState } from "react";
import { useHistory } from 'react-router-dom';
const axios = require('axios');
const Register = () => {

    let [code, setCode] = useState("");
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

    async function axiosClick() {
        axios.post('http://localhost:5000/register',
            {
                username: username,
                password: password,
                email: email,
                code: hostelCode
            })
            .then((response) => {

                setCode(response.status);
                alert("Your code is : " + code);
                if (response.status === 201) {
                    history.push('/menu');
                }
                console.log(response.status);
            })

            .catch((err) => {
                console.log(err);
            })
            .then((response) => {
                console.log(response);
            })
        if (!username || !password || !hostelCode || !email) {
            alert("Please Enter Valid Credentials");
            history.push('/register')
        }
        else {
            history.push('/menu');
        }
    }



    return (
        <div className="register">
            <div className="form">
                <form className="regform" method="GET" onSubmit={axiosClick}>
                    <h2>REGISTER</h2>
                    <label>USERNAME</label><br />
                    <input value={user.username} onChange={handleInput} type="text" name="username" /><br />

                    <label>PASSWORD</label><br />
                    <input value={user.password} onChange={handleInput} type="password" name="password" id="" /><br />

                    <label htmlFor="email">E-MAIL</label><br />
                    <input value={user.email} onChange={handleInput} type="email" name="email" /><br />

                    <label htmlFor="hcode">HOSTEL CODE</label><br />
                    <input value={user.hostelCode} onChange={handleInput} type="text" name="hostelCode" /><br />


                    <button type="submit">SUBMIT</button> <br />
                </form>
            </div>
        </div>
    );
}

export default Register;