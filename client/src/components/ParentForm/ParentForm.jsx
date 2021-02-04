import React, { useState } from "react";
import API from "../../utils/API"
import axios from "axios";

const ParentForm = () => {
  const [formSignin, setFormSignin] = useState ({
name: "",
email: "",
password: "",
// passwordCheck: "",

  })
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [userCreated, setUserCreated] = useState("");
  //   const [subjects, setSubjects] = useState("");
  //   const [id, setId] = useState(true);

  function handleInputChange(event) {
const { name, value } = event.target;
setFormSignin({...formSignin, [name]: value})
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    // if (!formSignin.password) {
    //   alert("The passwords need to match");
    // } else if (formSignin.name && formSignin.email && formSignin.password) {
      API.savePost({
        name: formSignin.name,
        email: formSignin.email,
        password: formSignin.password,
      })
      // axios
      //     .post("/api/parent")
      //     .then((response) => {
      //       console.log(response.data);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     })
        .then(() => {
          setFormSignin({
            name: "",
            email: "",
            password: "",
            // passwordCheck: "",
          });
          alert("Sucessfully Created user");
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
          // onSubmit={(e) => {
          //   handleFormSubmit(e, {
          //     name,
          //     email,
          //     password,
          //     // userCreated,
          //     // subjects,
          //     // id,
          //   });
          // }}
        >
                 <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label ">Name</label>
              <div className="control">
                <input className="input" type="text" id="name" placeholder="Text input"   name="name" value={formSignin.name}
                // onChange={(e) => {
                //   setName(e.target.value);
                // }}
                onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <input
                placeholder="Parent Name"
                id="name"
                type="text"
                //   name="title"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="name"style={styles.font}> Name</label>
            </div>
            </div> */}

<div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  type="email"
                  placeholder="Parent Email"
                  id="email"
                  value={formSignin.email}
                  name="email"
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  onChange={handleInputChange}
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
           
{/* <div className="column is-three-fifths is-offset-one-fifth">

<div className="input-field col s6">
              <input
                placeholder="Parent Email"
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="email"style={styles.font}> Email</label>
            </div>
</div> */}

<div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Password input"
                  id="password"
                  value={formSignin.password}
                  name="password"
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
         {/* <div className="column is-three-fifths is-offset-one-fifth">
         
            <div className="input-field col s12">
              <input
                placeholder="Parent Password"
                id="password"
                type="text"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="password"style={styles.font}> Password</label>
            </div>
        
         </div> */}
          
       
          {/* <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="User Created"
              id="userCreated"
              type="data"
              name="userCreated"
              value={userCreated}
              onChange={(e) => {
                setUserCreated(e.target.value);
              }}
            />
            <label htmlFor="userCreated">User Created</label>
          </div>
        </div> */}
          {/* <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Parent Subject"
              id="subject"
              type="text"
              name="subject"
              value={subjects}
              onChange={(e) => {
                setSubjects(e.target.value);
              }}
            />
            <label htmlFor="subject">Subject</label>
          </div>
        </div> */}
          {/* <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Parent id"
              id="id"
              type="number"
              name="id"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <label htmlFor="id">Parent Id</label>
          </div>
          
        </div> */}
          <div className="column is-three-fifths is-offset-one-fifth">
  
              <button className="button is-link" style={styles.font} onClick={handleFormSubmit}>
                Create New Parent Profile
              </button>
            
          </div>
        </form>
      </div>
    </>
  );
};
export default ParentForm;
