import React, { useState, useContext } from 'react'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./login.css";


const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate= useNavigate();
    
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
            navigate("/home");
        }
        catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data});
        }
    };

    return (
        <div>
            <section className="home show">
                <div className="form_container">
                    <div className="form login_form">
                        <form>
                            <h2>Login</h2>

                            <div className="input_box">
                                <input type="text" placeholder="username" id="username" onChange={handleChange} />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input type="password" placeholder="password" id="password" onChange={handleChange} />
                                <i className="uil uil-lock password"></i>
                            </div>

                            <button disabled={loading} onClick={handleClick} className="button">Login</button>
                            {error && <span>{error.message}</span>}
                            <div className="login_signup">Don't have an account? <a href='/register'> Signup</a></div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login