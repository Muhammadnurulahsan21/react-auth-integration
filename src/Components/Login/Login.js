import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  return (
    <div className="login">
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle}>Google Sign In</button>
      <br />
      <button onClick={signInUsingGithub}>Github Sign In</button>
      <br />
      <Link to="/register">New User?</Link>
    </div>
  );
};

export default Login;
