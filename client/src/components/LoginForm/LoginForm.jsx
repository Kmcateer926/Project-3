import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const LoginForm = ({ handleLoginSubmit, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const styles = {
    signin: {
      marginTop: 40,
      marginRight: 50,
      fontFamily: "Special Elite, cursive",
      align: "center",

      color: "#ffffff",
    },
    submit: {
      paddingTop: 10,
    },
    button: {
      fontFamily: "Special Elite, cursive",
      color: "#ffffff",
    },
    background: {
      backgroundImage: `url("https://t4.ftcdn.net/jpg/03/67/24/77/360_F_367247734_rml9UJtyflIYwvH5Sp6zQkAoxDOnksSS.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh",
      minWidth: "100%",
      margin: "0"
    },
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const parentData = {
      email,
      password,
    };

    axios
      .post("/api/parents/loginform", parentData)
      .then((response) => {
        setToken(response.data.token);
        console.log(setToken);
        console.log(response.data.token);
        history.push("/landing");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
    	<html style={{ margin: "0" }}>
      <div className="main" style={styles.background}>
        <div className="container" style={styles.signin}>
          <div className="columns">
            <div className="column has-text-centered">
              <h1 className="title is-2" style={{ color: "#ffffff" }}>
                Welcome Back
              </h1>
              <div>Sign in to find your tutor</div>
            </div>
          </div>
        </div>
        <div className="container">
          <form
            className="column"
            onSubmit={(e) => {
              handleLoginSubmit(e, {
                email,
                password,
              });
            }}
          >
            <div className="container" style={styles.button}>
              <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <div className="field">
                    <label
                      className="label"
                      style={{ color: "#ffffff", fontSize: "24px" }}
                    >
                      Email
                    </label>
                    <div className="control">
                      <input
                        style={{ fontFamily: "Special Elite, cursive" }}
                        className="input"
                        type="text"
                        placeholder="email@email.com"
                        id="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column  is-three-fifths is-offset-one-fifth">
                  <div className="field">
                    <label
                      className="label"
                      style={{ color: "#ffffff", fontSize: "24px" }}
                    >
                      Password
                    </label>
                    <div className="control">
                      <input
                        style={{ fontFamily: "Special Elite, cursive" }}
                        className="input"
                        type="password"
                        placeholder="password"
                        id="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={styles.submit}>
              <div className="columns">
                <div className="column has-text-centered">
                  <div class="control">
                    <button
                      class="button is-light is-outlined"
                      style={styles.button}
                      onClick={handleFormSubmit}
                    >
                      <Link
                        to="/landing"
                        style={{ color: "#ffffff", fontSize: "24px" }}
                      >
                        Sign In
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="columns">
                <div className="column has-text-centered" style={styles.button}>
                  <p>
                    <Link>Forgot Password</Link>
                  </p>
                  <p style={{ color: "#ffffff" }}>
                    New to Tutor Hub? <Link to="/parentsignup">Join now</Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </html>
    </>
  );
};

export default LoginForm;
