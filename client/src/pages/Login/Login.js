import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, loginUser } from "../../redux/Actions/actionUser";
import Alert from "../../compenents/Alert/Alert";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: Email, password: Password }, navigate));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/register");
    dispatch(Navigate());
  };
  const err = useSelector((state) => state.userReducer.errors);
  return (
    <div className="backH">
      <form id="fr" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          id="username"
        />

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="password"
        />
        <button className="b" onClick={onSubmit}>
          Log In
        </button>

        {err ? <Alert /> : null}

        <div className="social">
          <Link onClick={(e) => handleSubmit(e)}>Sign up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
