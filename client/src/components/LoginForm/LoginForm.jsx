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
      align: "center"
    },
    submit: {
      paddingTop: 10,
    },
    button: {
      fontFamily: "Special Elite, cursive",
    },
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const parentData = {
      email,
      password
    };

    axios
      .post("/api/auth/login", parentData)
      .then((response) => {
        history.push("/landing");
        // alert("Successfully Logged in user");
        console.log(response.data);
        setToken(response.data.token);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container" style={styles.signin}>
        <div className="columns">
          <div className="column has-text-centered">
            <h1 className="title is-3">Welcome Back</h1>
            <p>Sign in to find your tutor</p>
          </div>
        </div>
      </div>
      <div className="container" style={styles.font}>
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
                  <label className="label">Email</label>
                  <div className="control">
                    <input
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
                  <label className="label">Password</label>
                  <div className="control">
                    <input
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
                    class="button is-link is-hovered"
                    style={styles.button}
                    onClick={handleFormSubmit}
                  >
                      <Link to="/landing">Sign In</Link>
                  
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
                <p>
                  New to Tutor Hub? <Link to="/parentsignup">Join now</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
