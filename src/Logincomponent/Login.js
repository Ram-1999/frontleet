import "./Login.css";
import React, { useState } from "react";
var Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <div className="ui-auth">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3>Login Here</h3>

          <label htmlFor="username">Username</label>
          <input
            type={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or Phone"
            id="username"
          />

          <label htmlFor="password">Password</label>
          <input
            type={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            id="password"
          />
        </form>
        <button type="submit">Log In</button>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account ? Register here
        </button>
      </div>
    </div>
  );
};
export default Login;
