import "./login.scss";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/user/userServices";
import { useState } from "react";
export const Login = () => {
  const [user, setuser] = useState({
    email:"",
    password:""
  });

  const handleInputLogin = (e)=>{
    setuser({
      ...user,
      [e.target.name]:e.target.value
    })
    console.log(user)
  }

  const handleLogin = (e)=>{
    e.preventDefault();
    loginUser(user);
  }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" id="email" name="email"placeholder="Email or phone number" onChange={handleInputLogin}/>
          <input type="password" id="password" name="password" placeholder="Password" onChange={handleInputLogin}/>
          <button className="loginBtn">Sign In</button>
          <span>
            New to Netflix?<b><button className="links" onClick={handleLogin}> Sign up now.</button></b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b><a href="$">Learn more</a> </b>.
          </small>
        </form>
      </div>
    </div>
  );
};
