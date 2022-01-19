import "./SignIn.scss";
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../../userSlice";
import Label from "../../Assets/Layouts/Label/Label";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "../../Assets/Layouts/Button/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../Assets/Layouts/Button/ButtonSecondary/ButtonSecondary";
import HeaderTertiary from "../../Assets/Layouts/Headers/HeaderTertiary/HeaderTertiary";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      }).catch((error) => {
        alert(error.message);
        history.push("/tesla-account");
      });
  };

  return (
    <div className="login">
      <Helmet>
        <meta charset="utf-8" />
        <title>Log In | Tesla</title>
      </Helmet>
      <HeaderTertiary />
      <div className="login__info">
        <h1>Sign In</h1>
        <form className="login__form">
          <Label for="email" value="Email Address" />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label for="password" value="Password" />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="Sign In" type="submit" onClick={signIn} />
        </form>
        <div className="login__forgot__section">
          <Link to="/login">Forgot Password?</Link>
        </div>
        <div className="login__divider">
          <span>OR</span>
        </div>
        <Link to="/signup">
          <ButtonSecondary name="Create Account" />
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
