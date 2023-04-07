import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <div>
        <h1>you have successfully logged in</h1>
        <button>logout</button>
      </div>
      <form autoComplete="off">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
          name="password"
        />
        <button>submit</button>
      </form>
    </>
  );
}

export default LoginForm;
