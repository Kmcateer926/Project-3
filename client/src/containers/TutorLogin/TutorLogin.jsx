import React, { useState, useEffect } from "react";
import tutorSubject from "./tutorSubject.json";

const styles = {
  font: {
    fontFamily: "Special Elite, cursive",
  },
  heading: {
    paddingTop: 40,
  },
};

const TutorLogin = () => {
  const [subject, setSubject] = useState({});

  useEffect(() => {
    console.log(subject);
    setSubject(tutorSubject);
  }, [subject]);

  return (
    <>
      <div className="container" style={styles.font}>
        <div className="container" style={styles.font}>
          <div>
            <h1 className="title is-3 has-text-centered" style={styles.heading}>
              Create Your Tutor Hub Account
            </h1>
            <h4 className="subtitle is-6 has-text-centered">
              Already Have an Account?<a href="/signin"> Login</a>
            </h4>
          </div>

          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label ">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>
          </div>

          {/* <div className="field">
  <label className="label">Username</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="text" placeholder="Text input"/>
    <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>
  <p className="help is-success">This username is available</p>
</div> */}
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  type="email"
                  placeholder="Email input"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p className="help is-danger">This email is invalid</p>
            </div>
          </div>

          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Password input"
                />
              </div>
            </div>
          </div>

          <>
            <div className="column is-three-fifths is-offset-one-fifth">
              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <div className="select">
                    <select>
                      {tutorSubject.map((subject) => (
                        <option>{subject.subjects[0]}</option>
                      ))}
                      {/* <option>With options</option> */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </>

          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                ></textarea>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" /> I agree to the{" "}
                  <a href="/">terms and conditions</a>
                </label>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" style={styles.font}>
                  Sign Up
                </button>
              </div>
              <div className="control">
                <button className="button is-link is-light" style={styles.font}>
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* <div className="field">
  <div className="control">
    <label className="radio">
      <input type="radio" name="question"/>
      Yes
    </label>
    <label className="radio">
      <input type="radio" name="question"/>
      No
    </label>
  </div>
</div> */}
        </div>
      </div>
    </>
  );
};

export default TutorLogin;