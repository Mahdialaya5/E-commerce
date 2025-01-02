import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, addUser } from "../../redux/Actions/actionUser";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../compenents/Alert/Alert";

function Signup() {
  const [newemail, setemail] = useState("");
  const [newname, setname] = useState("");
  const [newpassword, setpassword] = useState("");
  const [newrole, setrole] = useState("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch( addUser({
          email: newemail,
          name: newname,
          password: newpassword,
          role: newrole,
        },
        navigate
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login");
    dispatch(Navigate());
  };
  const err = useSelector((state) => state.userReducer.errors);
  return (
    <div className="backH">
      <form id="frsig">
        <h3>Register</h3>
        <input
          type="Email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email "
         
        />
     
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          placeholder="Username"
         
        />

        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
    
        />
        <label>Who are you ?</label>
        <select onChange={(e) => setrole(e.target.value)} defaultValue={"user"}>
          <option>user</option>
          <option>company</option>
        </select>
        <button onClick={onSubmit} className="b">
          register
        </button>
        {err ? <Alert /> : null}
        <div className="social">
          <Link onClick={(e) => handleSubmit(e)}>Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
