import React from "react";

function LoginForm() {
  return (
    <>
      <form autoComplete="off">
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password" />
        <button>submit</button>
      </form>
    </>
  );
}

export default LoginForm;
