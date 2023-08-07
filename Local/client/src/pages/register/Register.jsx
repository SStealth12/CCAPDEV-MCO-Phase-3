import React, { useState } from 'react';
import axios from 'axios';
import "./register.css";

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/auth/register', {
                email,
                username,
                password
            });

            console.log(response.data); // You can handle success however you want
            setSuccess(true);
            setError(null);
        } catch (err) {
            setError(err.response.data); // Assuming the server returns error message in the response
            setSuccess(false);
        }
    }

    return (
        <div>
            <section className="home show">
                <div className="form_container">
                    <div className="form login_form">
                        <form>
                            <h2>Signup</h2>

                            <div className="input_box">
                                <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <i className="uil uil-user user"></i>
                            </div>
                            <div className="input_box">
                                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                <i className="uil uil-lock password"></i>
                            </div>

                            <button className="button" onClick={handleRegister}>Sign Up</button>
                            {error && <span>Registration Error</span>}
                            {success && <span>Registration Successful</span>}   
                            <div className="login_signup">Already have an account? <a href="/">Login</a></div>
                        </form>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register;
