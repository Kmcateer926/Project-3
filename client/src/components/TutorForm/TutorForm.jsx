import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TutorForm = ({ buttonText, handleFormSubmit }) => {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [subjects, setSubjects] = useState("");
  const [experience, setExperience] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [approved, setApproved] = useState(false);
  const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const { id } = useParams();
  
  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`/api/tutors/${id}`)
        .then((response) => {
          console.log(response.data);
          const { name, imageURL, education, subjects, experience, approved } = response.data;
          setName(name);
          setImageURL(imageURL);
          setEducation(education);
          setSubjects(subjects);
          setExperience(experience);
          setApproved(approved);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <>
      <form
        className="col s12"
        onSubmit={(e) => {
          handleFormSubmit(
            e,
            {
              name,
              imageURL,
              education,
              subjects,
              experience,
              approved,
              email
            },
            id
          );
        }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Tutor Name"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="title">Tutor Name</label>
          </div>
          <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Tutor Image"
              id="imageURL"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label htmlFor="imageURL">Tutor Image</label>
          </div>
        </div>
          <div className="input-field col s6">
            <input
              placeholder="Education"
              id="education"
              type="text"
              name="education"
              value={education}
              onChange={(e) => {
                setEducation(e.target.value);
              }}
            />
            <label htmlFor="price">Education</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Subjects"
              id="subjects"
              type="text"
              name="subjects"
              value={subjects}
              onChange={(e) => {
                setSubjects(e.target.value);
              }}
            />
            <label htmlFor="description">Subjects</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Experience"
              id="experience"
              type="text"
              name="experience"
              value={experience}
              onChange={(e) => {
                setExperience(e.target.value);
              }}
            />
            <label htmlFor="description">Experience</label>
          </div>
        </div>
        <div className="input-field col s6">
          <label>
            <input
              type="checkbox"
              checked={approved}
              onChange={() => {
                setApproved(!approved);
              }}
            />
            <span>Approved?</span>
          </label>
        </div> <div className="column is-three-fifths is-offset-one-fifth">
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
        {/* </div> */}
        <div className="row">
          <div className="col s12">
            <button className="waves-effect waves-light btn">
              {buttonText}
            </button>
          </div>
        </div>
       
           

{/* <div className="column is-three-fifths is-offset-one-fifth">
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
          </div> */}
      </form>
    </>
  );
};
export default TutorForm;
