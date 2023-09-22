import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
// import { Bar } from "./Navbar";
export const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    console.log(email)
    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
            setMessage("Email is Valid");
            toast.success('Login Sucessful');
            dispatch(login({
                email: email
            }))
            nav('/Dashboard');
        } else if (!regEx.test(email) && email !== "") {
            setMessage("Email is Not Valid");
        } else {
            setMessage("");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    const handleRoute = () => {
        nav('/Register')
    }
    // dispatch(setEmail(email));
    return (
        <>
            {/* <Bar /> */}
            <div className="bd">
                <div class="login-box">
                    <form onSubmit={handleSubmit}>
                        <h1 className="head">LOGIN</h1>
                        <div class="user-box">
                            <label htmlFor="email"></label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" id="email" name="email" autoFocus required />
                        </div>
                        <div class="user-box">
                            <label htmlFor="password"></label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" required />
                        </div>
                        <button type="submit" onClick={emailValidation} className="button" >Log In</button>
                        <p className="message">{message}</p>
                    </form>
                    <h5><span className="text-link" onClick={handleRoute}>Register here.</span></h5>
                </div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                </div>
        </>
    )
}
