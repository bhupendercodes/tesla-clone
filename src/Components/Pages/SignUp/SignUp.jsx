import "./SignUp.scss";
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

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();

  const signUp = (e) => {
    e.preventDefault();

    if (!fName) {
      return alert("Please Enter Your First Name");
    }
    if (!lName) {
      return alert("Please Enter Your Last Name");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: fName,
          }).then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fName,
              })
            );
          });
      }).catch((error) => {
        alert(error.message);
        history.pushState("/tesla-account");
      });
  };

  return (
    <div className="signup">
      <Helmet>
        <meta charset="utf-8" />
        <title>Sign Up | Tesla</title>
      </Helmet>
      <HeaderTertiary />
      <div className="signup__info">
        <h1>Create Account</h1>
        <form className="signup__form">
          <Label for="fName" value="First Name" />
          <input
            type="text"
            id="fName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <Label for="lName" value="Last Name" />
          <input
            type="text"
            id="lName"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
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
          <ButtonPrimary name="Sign Up" type="submit" onClick={signUp} />
        </form>
        <div className="signup__divider">
          <span>OR</span>
        </div>
        <Link to="/login">
          <ButtonSecondary name="Log In" />
        </Link>
      </div>
    </div>
  );
}

export default Signup;
