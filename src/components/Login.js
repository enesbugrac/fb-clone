import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Login.style.css";
function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((err) => alert(err.message()));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
        />
        <img
          alt=""
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sing in
      </Button>
    </div>
  );
}

export default Login;
