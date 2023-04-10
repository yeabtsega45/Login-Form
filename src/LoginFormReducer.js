import React, { useReducer } from "react";
import "./LoginForm.css";

const initialState = {
  username: "",
  password: "",
  loggedIn: false,
  error: false,
};

const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "SUCCESS": {
      return {
        ...state,
        loggedIn: true,
        username: "",
        password: "",
      };
    }
    case "ERROR": {
      return {
        ...state,
        error: "invalid",
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        loggedIn: false,
        error: false,
      };
    }
    case "USERNAME": {
      return {
        ...state,
        username: action.value,
      };
    }
    case "PASSWORD": {
      return {
        ...state,
        password: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

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
      {updateState.loggedIn ? (
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
          <p>{updateState.error}</p>
          <input
            value={updateState.username}
            onChange={(e) =>
              dispatch({ type: "USERNAME", value: e.target.value })
            }
            type="text"
            placeholder="username"
            name="username"
          />
          <input
            value={updateState.password}
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
