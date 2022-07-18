import { useState, useRef } from "react";
import { loginUser, registerUser } from "../../services/user/userServices";
import useFetchPostUser from "../../hooks/useFetch"
import "./register.scss";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username:""
  });
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const funcion = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data,loading,error] = useFetchPostUser("http://localhost:8800/api/auth/register",user);

  }
  const handleFinish =  (e) => {
    console.log("CALLED")
    e.preventDefault();
    
    if (user.email !== "" || user.password !== "" || user.username !== "") {
    
    funcion();
    }
  };


  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginBtn">Sign In</button>
        </div>
      </div>
      <div className="container">
        <div className="text-register">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>

        <div className="dates-register">
          <form className="form-register">
            <input
              type="text"
              className="input-register"
              placeholder="email"
              name="email"
              onChange={handleInput}
            />
            <input
              type="password"
              className="input-register"
              placeholder="password"
              onChange={handleInput}
              name="password"
            />
             <input
              type="text"
              className="input-register"
              placeholder="username"
              name="username"
              onChange={handleInput}
            />
            <button className="registerBtn" onClick={handleFinish}>
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
