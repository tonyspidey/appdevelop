import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Register.css';
// import { Bar } from "./Navbar";
export const Register = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState("");
    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
            setMessage("Email is Valid");
            toast.success('Sucessfully registered!');
        } else if (!regEx.test(email) && email !== "") {
            setMessage("Email is Not Valid");
        } else {
            setMessage("");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name);

    }
    // const err = () => {
    //     toast.error('Enter the credentials');
    // }
    const handleRoute = () => {
        nav('/Login')
    }
    return (
        <>
            {/* <Bar /> */}
            <div className="bd">
                <div class="login-box">
                    <h1 className="head">REGISTER</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="user-box">
                            <label htmlFor="name"></label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="your name" id="name" name="name" autoFocus required />
                        </div>
                        <div class="user-box">
                            <label htmlFor="email"></label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" id="email" name="email" required />
                        </div>
                        <div class="user-box">
                            <label htmlFor="password"></label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" required />
                        </div>
                        <div className="lbutton"><button type="submit" className="button" onClick={emailValidation} disabled={!password}>Register</button></div>
                        <p className="message">{message}</p>
                    </form>
                    <h5><span className="text-link" onClick={handleRoute}>Log in here.</span></h5>
                </div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                </div>
        </>
    )
}