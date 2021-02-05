import React, { useState } from "react";
import API from "../../utils/API"
import axios from "axios";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

const ParentForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleFormSubmit(event) {
    event.preventDefault();
const parentData = {
  name,
  email,
  password
}
      axios.post("/api/parents", parentData)
        .then(() => {
          
          alert("Successfully Created user");
        })
        .catch((err) => console.log(err));
   
  
  }
  const styles = {
    font: {
      fontFamily: "Special Elite, cursive",
    },
    heading: {
      paddingTop: 40,
    },
    link: {
      color: "#FFFFFF",
      fontFamily: "Special Elite, cursive",
    }
  };

  return (
    <>
    <div className="container" style={styles.font}>
    <h1 className="title is-3 has-text-centered" style={styles.heading}>
          Create Your Tutor Hub Account
        </h1>
        <h4 className="subtitle is-6 has-text-centered">
          Already Have an Account?<a href="/signin"> Login</a>
        </h4>
    </div>
    
     
      <div className="container" style={styles.font}>
        <form
          className="column"
        >
                 <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label ">Name</label>
              <div className="control">
                <input className="input" type="text" id="name" placeholder="Text input"   name="name" value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                // onChange={handleInputChange}
                />
              </div>
            </div>
          </div>


<div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  type="email"
                  placeholder="Parent Email"
                  id="email"
                  value={email}
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  // onChange={handleInputChange}
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
                  id="password"
                  value={password}
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  // onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
     
          <div className="column is-three-fifths is-offset-one-fifth">
  
              <button className="button is-link" style={styles.font} onClick={handleFormSubmit}>
               <Link to="/loginform" style={styles.link}>Create New Parent Profile</Link>
              </button>
            
          </div>
        </form>
      </div>
    </>
  );
};
export default ParentForm;
