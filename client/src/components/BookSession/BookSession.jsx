import React, { useState, useEffect } from "react";
import "./Directory.css";
import teacherDirectory from "./teacherDirectory.json";
import CalendarApp from "../../components/Calendar/Calendar";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import SessionForm from "../../components/SessionForm/SessionForm"
import TutorCard from "../../components/TutorCard/TutorCard"

const BookSessionForm = ({ buttonText, handleFormSubmit }) => {
  const [tutor, setTutor] = useState("");
  const [sessionLength, setSessionLength] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { id } = useParams();

  // const history = useHistory();

  const styles = {
    font: {
      fontFamily: "Special Elite, cursive",
    },
    heading: {
      paddingTop: 40,
    },
  };

  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`/api/sessions/${id}`)
        .then((response) => {
          console.log(response.data);
          const { tutor, date, time, sessionLength } = response.data;
          setTutor(tutor);
          setDate(date);
          setTime(time);
          setSessionLength(sessionLength);
          // history.push("/landing")
          // alert("Successfully added session")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <>
    
      <div className="spacer" style={{ height: "50px" }}><TutorCard></TutorCard></div>
      <div>
        <h1
          style={{
            fontFamily: "Special Elite, cursive",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          Tutor Directory
        </h1>
        <div className="spacer" style={{ height: "50px" }}></div>
      </div>
      {teacherDirectory.map((teachers) => (
        <div
          className="card "
          style={{
            margin: "10px",
            border: "1px solid",
            padding: "5px",
            width: "30%",
            display: "inline-block",
            flexDirection: "row",
            boxShadow: "5px 2px 2px grey",
            borderRadius: "15px",
          }}
        >
          <div className="card-image">
            <figure className="image is-128x128">
              <img
                src={teachers.image}
                alt={teachers.name}
                style={{ borderRadius: "15px" }}
              />
            </figure>
          </div>

          <div className="card">
            <div className="card-content">
              <form
                className="column"
                onSubmit={(e) => {
                  handleFormSubmit(
                    e,
                    {
                      tutor,
                      date,
                      time,
                      sessionLength,
                      // userCreated,
                      // subjects,
                      // id,
                    },
                    id
                  );
                }}
              >
                <div
                  className="content"
                  style={{ fontFamily: "Special Elite, cursive" }}
                >
                  <strong>Name: </strong>
                  {teachers.name}
                  <br />
                  <strong>Education: </strong>
                  {teachers.education}
                  <br />
                  <strong>Experience: </strong>
                  {teachers.experience}
                  <br />
                  <strong>Subject(s): </strong>
                  {teachers.subjects}
                  <br /> <br /> <br />
                </div>
                <div className="booking-deets">
                  <p>
                    <strong>
                      Date:{" "}
                      <input
                        className="input is-danger"
                        type="date"
                        // id="email"
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Time:{" "}
                      <div className="field">
                        <div className="control">
                          <div className="select">
                            <select>
                              <option>Select a Time</option>
                              <option>3:00 PM</option>
                              <option>3:30 PM</option>
                              <option>4:00 PM</option>
                              <option>4:30 PM</option>
                              <option>5:00 PM</option>
                              <option>5:30 PM</option>
                              <option>6:00 PM</option>
                              <option>6:30 PM</option>
                              <option>7:00 PM</option>
                              <option>7:30 PM</option>
                              <option>8:00 PM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      Length:{" "}
                      <div className="field">
                        <div className="control">
                          <div className="select">
                            <select type="text">
                              value={sessionLength}
                              onChange=
                              {(e) => {
                                setSessionLength(e.target.value);
                              }}
                              <option>Select Session Length</option>
                              <option>30 Minutes</option>
                              <option>60 Minutes</option>
                              <option>90 Minutes</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </strong>
                  </p>

                  <button
                    className="button is-small is-fullwidth is-info"
                    style={{
                      borderRadius: "10px",
                      fontSize: "25px",
                      fontWeight: "bold",
                      fontFamily: "Special Elite, cursive",
                    }}
                    // onClick={handleFormSubmit}
                  >
                    <Link to="/landing" style={styles.link}>
                      {buttonText}
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default BookSessionForm;
