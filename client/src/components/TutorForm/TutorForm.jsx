import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import board from "../../components/ChalkBG/chalkBoard.jpg";
//tutor form to create new tutors in our data base
//tutors can be approved here as well as in admin
const TutorForm = ({ buttonText, handleFormSubmit }) => {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [subjects, setSubjects] = useState("");
  const [experience, setExperience] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [approved, setApproved] = useState(false);
  const [email, setEmail] = useState("");
  const { id } = useParams();
//api post for tutors
  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`/api/tutors/${id}`)
        .then((response) => {
          console.log(response.data);
          const {
            name,
            imageURL,
            education,
            subjects,
            experience,
            approved,
          } = response.data;
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
      <body style={{ backgroundImage: `url(${board})` }}>
        <div style={{ height: "50px" }}></div>
        <div>
        </div>
        <div style={{ height: "50px" }}></div>
        <div className="columns">
          <div
            className="column is-6 
          is-offset-3"
            style={{
              border: "solid white 1px",
              textAlign: "center",
              borderRadius: "15px",
              padding: "10px",
              color: "white",
              opacity: "0.9",
            }}
          >
            <h1
              style={{
                fontFamily: "Special Elite, cursive",
                fontSize: "40px",
                textAlign: "center",
              }}
            >
              Add Tutor
            </h1>
            <div style={{ height: "50px" }}></div>
            <form
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
                    email,
                  },
                  id
                );
              }}
            >
              <input
                className="input is-normal"
                placeholder="Tutor Name"
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                style={{
                  marginBottom: "5px",
                  fontFamily: "Special Elite, cursive",
                }}
              />
              <input
                className="input is-normal is-link"
                placeholder="Tutor Image"
                style={{
                  fontFamily: "Special Elite, cursive",
                  marginBottom: "5px",
                }}
                id="imageURL"
                type="text"
                name="imageURL"
                value={imageURL}
                onChange={(e) => {
                  setImageURL(e.target.value);
                }}
              />
              <input
                className="input is-normal"
                placeholder="Education"
                id="education"
                type="text"
                name="education"
                value={education}
                onChange={(e) => {
                  setEducation(e.target.value);
                }}
                style={{
                  marginBottom: "5px",
                  fontFamily: "Special Elite, cursive",
                }}
              />
              <input
                className="input is-normal"
                placeholder="Subjects"
                id="subjects"
                type="text"
                name="subjects"
                value={subjects}
                onChange={(e) => {
                  setSubjects(e.target.value);
                }}
                style={{
                  marginBottom: "5px",
                  fontFamily: "Special Elite, cursive",
                }}
              />
              <input
                className="input is-normal"
                placeholder="Experience"
                id="experience"
                type="text"
                name="experience"
                value={experience}
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
                style={{
                  marginBottom: "5px",
                  fontFamily: "Special Elite, cursive",
                }}
              />
              <div></div>{" "}
              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="Tutor Email"
                    id="email"
                    value={email}
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    style={{
                      marginBottom: "5px",
                      fontFamily: "Special Elite, cursive",
                    }}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right"></span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={approved}
                onChange={() => {
                  setApproved(!approved);
                }}
              />
              <div>
                <label
                  style={{
                    fontFamily: "Special Elite, cursive",
                    fontSize: "20px",
                  }}
                >
                  <span>Approved</span>
                </label>
              </div>
              <button
                className="button is-light is-outlined"
                style={{
                  fontFamily: "Special Elite, cursive",
                  fontSize: "24px",
                }}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
        <div style={{ height: "50px" }}></div>
      </body>
    </>
  );
};
export default TutorForm;
