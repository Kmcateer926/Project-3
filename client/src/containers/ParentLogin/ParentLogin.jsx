import React, { useState, useEffect } from "react";
import parentSubject from "./parentSubject.json";

const ParentLogin = () => {
  const [subject, setSubject] = useState({});

  useEffect(() => {
    console.log(subject);
    setSubject(parentSubject);
  }, [subject]);

  return (
    <div>
        <div>
            <h1>Create Your Teacher Account</h1>
            <h4>Already Have an Account?<a href="/">Login</a></h4>
        </div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
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
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="text" placeholder="Password input" />
        </div>
      </div>
      <>
        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                {parentSubject.map((subject) => (
                  <option>{subject.subjects[0]}</option>
                ))}
                {/* <option>With options</option> */}
              </select>
            </div>
          </div>
        </div>
      </>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" />I agree to the{" "}
            <a href="/">terms and conditions</a>
          </label>
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

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Login</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ParentLogin;
