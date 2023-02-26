import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css"
function SignUp() {
    let [emailError, setEmailError] = useState(false);
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [cPassword, setCPassword] = useState();
    let [cPasswordError, setCPasswordError] = useState(false);
    let navigate = useNavigate()


    function postData() {

        fetch("https://recipe-38wu.onrender.com/signUp", {
            method: "POST",
            body: JSON.stringify({
                email, password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(function (response) {
                console.log(response.message);
                if (response.message === "Email already exists") {
                    alert("Email already exists")
                } else {
                    alert("registered Succeful")
                    navigate('/')

                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    let emailRegex =
        /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    let emailHandler = (e) => {
        let value = e.target.value;
        if (!value.match(emailRegex)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        setEmail(value);
    };
    let cPasswordHandler = (e) => {
        let value = e.target.value;
        if (!value === password) {
            setCPasswordError(true);
        } else {
            setCPasswordError(false);
        }
        setCPassword(value);
    };
    let passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    let submitHandler = (e) => {
        e.preventDefault();
        postData()

    };
    return (
        <div className="signup-container">
            <form className="main-boxing" onSubmit={submitHandler}>
                <h3 className="signin-logo">Create an Account</h3>

                <div>

                    <input placeholder="Email" className="input-boxing" type="email" name="email" value={email} onChange={emailHandler} />
                    {emailError ? <div className="error">Invalid Email</div> : ""}
                </div>
                <div>

                    <input
                        placeholder="Password"
                        className="input-boxing"
                        type="password"
                        name="password"
                        value={password}
                        onChange={passwordHandler}
                    />
                </div>
                <div>

                    <input
                        placeholder="Confirm Password"
                        className="input-boxing"
                        type="password"
                        name="cpassword"
                        value={cPassword}
                        onChange={cPasswordHandler}
                    />
                    {cPasswordError ? <div className="error">Password must match</div> : ""}
                </div>
                <button className="btn sign-up-btn" type="submit">CONTINUE</button>
                <Link to="/">Sign In</Link>
            </form>

        </div>
    );
}
export default SignUp;