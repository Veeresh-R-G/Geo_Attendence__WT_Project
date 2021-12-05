import { useState } from "react";
import axios from 'axios';


const Rec = () => {
    axios.defaults.baseURL = "http://localhost:5000";

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [code, setCode] = useState("");
    let [date, setDate] = useState("");

    axios.get('http://localhost:5000/rec').then(resp => {

        console.log(resp.data);
        setName(resp.data.name);
        setEmail(resp.data.email);
        setCode(resp.data.hostelCode);
        setDate(resp.data.date);
    });
    let dateArray = date.split(' ');
    console.log(dateArray);
    function myfunction(item) {
        var x = document.querySelector('ul')
        x.innerHTML += <li>{item}</li>
    }
    return (
        <div>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Hostel Code  : {code}</p>
            <p>AttenDence Given On : </p>
            <ul>
                {dateArray.map((item) => <p>{item}</p>)}
            </ul>

        </div>
    );
}

export default Rec;