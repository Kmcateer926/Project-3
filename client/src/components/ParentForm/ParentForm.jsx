import React, { useState } from "react";
import axios from "axios";
// import LoginForm from "../../components/LoginForm/LoginForm";
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
      axios.post("/api/parents", parentData)({email, password})
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
      color: "#FFFFFF"
    },
    link: {
      color: "#FFFFFF",
      fontFamily: "Special Elite, cursive",
      fontSize: "24px"
      
    }
  };

  return (
    <>
    <div className="container" style={styles.font}>
     
    <h1 className="title is-2 has-text-centered" style={styles.heading}>
          Create Your Tutor Hub Account
        </h1>
        <h4 className="subtitle is-6 has-text-centered" style={styles.link}>
        
        </h4>
    </div>
    
     
      <div className="container" style={styles.font}>
     
        <form className="column">
                 <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label" style={styles.link}>Name</label>
              <div className="control">
                <input className="input" type="text" id="name" placeholder="Name"   name="name" value={name}
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
              <label className="label"   style={styles.link}>Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
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
              </div>
           
            </div>
          </div>
           

<div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label" style={styles.link}>Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
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
     
          <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
  
              <button className="button is-light is-outlined" style={styles.font} onClick={handleFormSubmit}>
               <Link to="/loginform" style={styles.link}>Create New Parent Profile</Link>
              </button>
            
          </div>
        </form>
      </div>
    </>
  );
};
export default ParentForm;
