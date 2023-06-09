import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    if (username === "truename" && password === "admin") {
      console.log("success");
      setLoggedIn(true);
      setUsername("");
      setPassword("");
    } else {
      console.log("error");
      setError("wrong password");
    }
  };

  return (
    <>
      {loggedIn ? (
        <div className="logout">
          <h1>you have successfully logged in</h1>
          <button
            onClick={() => {
              setLoggedIn(false);
              setError(false);
            }}
          >
            logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleForm} autoComplete="off">
          <p className="error">{error}</p>
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
          <p>hint :</p>
          <p>name=truename</p>
          <p>password=admin</p>
        </form>
      )}
    </>
  );
}

export default LoginForm;
