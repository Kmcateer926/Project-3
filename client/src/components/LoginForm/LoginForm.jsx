import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ handleLoginSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    signin: {
      marginTop: 40,
      marginRight: 50,
      fontFamily: "Special Elite, cursive",
    },
    submit: {
      paddingTop: 10,
    },
    button: {
      fontFamily: "Special Elite, cursive",
    },
  };

 
    return (
      <>
        <div className="container" style={styles.signin}>
          <div className="columns">
            <div className="column has-text-centered">
              <p className="title is-3">Welcome Back</p>
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
                // userCreated,
                // subjects,
                // id,
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
                        placeholder="Text Input"
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
                        type="text"
                        placeholder="Text input"
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
                    >
                      Sign In
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
                    New to Tutor Hub? <a href="/parentsignup">Join now</a>
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
