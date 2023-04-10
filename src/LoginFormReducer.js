import React, { useReducer } from "react";
import "./LoginForm.css";

const initialState = {
  username: "",
  password: "",
  loggedIn: false,
  error: false,
};

const reducer = (state, action) => {};

function LoginForm() {
  const [updateState, dispatch] = useReducer(reducer, initialState);

  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [loggedIn, setLoggedIn] = useState(false);
  //   const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (
      updateState.username === "truename" &&
      updateState.password === "admin"
    ) {
      console.log("success");

      //   setLoggedIn(true);
      //   setUsername("");
      //   setPassword("");
      dispatch({ type: "SUCCESS" });
    } else {
      console.log("error");
      // setError("invalid");
      dispatch({ type: "ERROR" });
    }
  };

  return (
    <>
      {loggedIn ? (
        <div>
          <h1>you have successfully logged in</h1>
          <button
            onClick={() => {
              // setLoggedIn(false);
              // setError(false);
              dispatch({ type: "LOGOUT" });
            }}
          >
            logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleForm} autoComplete="off">
          <p>{error}</p>
          <input
            value={username}
            onChange={(e) =>
              dispatch({ type: "USERNAME", value: e.target.value })
            }
            type="text"
            placeholder="username"
            name="username"
          />
          <input
            value={password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD", value: e.target.value })
            }
            type="text"
            placeholder="password"
            name="password"
          />
          <button>submit</button>
        </form>
      )}
    </>
  );
}

export default LoginForm;
