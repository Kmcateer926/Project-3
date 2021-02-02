import React from "react";
import { Link, NavLink } from "react-router-dom";

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
  }
};

const Signin = () => {
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
      <div className="container" style={styles.button}>
     
        <div className="columns">
    
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text Input" />
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column  is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={styles.submit}>
        <div className="columns">
          <div className="column has-text-centered">

          <div class="control">
    <button class="button is-link is-hovered" style={styles.button}>Sign In</button>
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
    <p >
        New to Tutor Hub? <a href="/parentlogin">Join now</a>
    </p>
         
        </div>
      </div>
      </div>
    </>
  );
};

export default Signin;