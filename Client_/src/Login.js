import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Login = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    let name;
    let value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    /*

        ---TESTING PURPOSES---
        console.log(user);

    */

    axios.defaults.baseURL = "http://localhost:5000";

    let username = user.username;
    let password = user.password;

    console.log("from ther react - login page : ", username, password);

    let [myName, setName] = useState("");
    const postData = () => {
        axios.post('/login',
            {
                username: user.username,
                password: user.password
            })
            .then((res) => {
                setName(res.data);
                console.log("This is Inside the axios POST : " + myName);
                alert(res.data);

            })

            .catch((err) => {
                console.log(err);
            })


        if (!username || !password) {
            alert("Please Enter Valid Credentials");
            history.push('/login')
        }
        else {
            history.push('/menu');
        }

    }

    console.log("This is outside the axios POST : " + myName);




    // const axiosClick = async () => {
    //     let res = api.post('/login', {
    //         username: username,
    //         password: password,
    //     });
    //     console.log(res);
    //     if (res === "OK") {
    //         history.push('/menu');
    //     }
    //     else {
    //         history.push('/login');
    //     }
    // }
    return (
        <div className="login">
            <div className="form">
                <form className="loginform">
                    <h2>LOGIN</h2>
                    <label>USERNAME</label><br />
                    <input value={user.username} onChange={handleInput} type="text" name="username" /><br /><br />

                    <label>PASSWORD</label><br />
                    <input value={user.password} onChange={handleInput} type="password" name="password" id="" /><br /><br />
                    <button onClick={postData}>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default Login;