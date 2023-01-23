import React, { useState } from "react";

function Register(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDeafult();
    console.log(email);
  };

  return (
    <div>
      <div className="ui-auth">
        <form className="register-form" onSubmit={handleSubmit}>
          <h3>Register Here</h3>

          <label htmlFor="username">Username</label>
          <input
            type={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or Phone"
            id="username"
          />

          <label htmlFor="password">Password</label>
          <input
            type={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            id="password"
          />

          <label htmlFor="password">Name</label>
          <input
            type={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            id="name"
          />
        </form>
        <button type="submit">Register</button>
        <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
          Already have an account? Login here
        </button>
      </div>
    </div>
  );
}

export default Register;
