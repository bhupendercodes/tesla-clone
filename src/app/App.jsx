import "./App.scss";
import { auth } from "../firebase";
import React, { useEffect } from "react";
import Home from "../Components/Pages/Home/Home";
import Signin from "../Components/Pages/SignIn/SignIn";
import Signup from "../Components/Pages/SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../userSlice";
import Account from "../Components/Pages/Account/Account";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={
              user ? <Navigate replace to="/tesla-account" /> : <Signin />
            }
          />
          <Route
            exact
            path="/signup"
            element={
              user ? <Navigate replace to="/tesla-account" /> : <Signup />
            }
          />
          <Route
            exact
            path="/tesla-account"
            element={!user ? <Navigate replace to="/login" /> : <Account />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
