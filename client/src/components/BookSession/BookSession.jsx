import React, { useState, useEffect } from "react";
import "./Directory.css";
import teacherDirectory from "./teacherDirectory.json";
import CalendarApp from "../../components/Calendar/Calendar";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";


const BookSessionForm = ({ buttonText, handleFormSubmit }) => {

  const [tutor, setTutor] = useState("");
  const [sessionLength, setSessionLength] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { id } = useParams();

  const history = useHistory();

  const styles = {
    font: {
      fontFamily: "Special Elite, cursive",
    },
    heading: {
      paddingTop: 40,
    },
  };

  useEffect(()=>{
    console.log(id);
    axios.post(`/api/sessions/${id}`)
    .then((response)=>{
      console.log(response.data);
      const {
        tutor, 
        sessionLength,
        date, 
        time
      } = response.data;
      setTutor(tutor);
      setSessionLength(sessionLength);
      setDate(date);
      setTime(time);
      history.push("/landing")
      // alert("Successfully added session")
    }).catch((err)=>{
      console.log(err)
    });
    }, [id])

  // const [teachers, setTeachers] = useState({});

  // useEffect(() => {
  //   console.log(id)
  //   setTeachers(teacherDirectory);
  // }, [id]);

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   const sessionData = {
  //     tutor,
  //     sessionLength,
  //     date,
  //     time,
  //   };

  //   axios
  //     .post("/api/sessions/landing", sessionData)
  //     .then(() => {
  //       history.push("/landing");
  //       alert("Successfully Logged in user");
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <>
      <div className="spacer" style={{ height: "50px" }}></div>
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
                  handleFormSubmit(e, {
                    tutor,
                    sessionLength,
                    date,
                    time,
                    // userCreated,
                    // subjects,
                    // id,
                  }, id);
                }}
              ></form>
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
                {/* <p>
                  <strong>
                    Session Length:{" "}
                    <input
                      className="input is-danger"
                      type="integer"
                      placeholder="Session Length"
                      id="email"
                      value={sessionLength}
                      onChange={(e) => {
                        setSessionLength(e.target.value);
                      }}
                    />
                  </strong>
                </p> */}
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
                    <div className="cols">
                      <div className="field">
                        <div className="control">
                          <label className="radio">
                            <input type="radio" name="question" />
                            30 min session
                          </label>
                          <label className="radio">
                            <input type="radio" name="question" />
                            60 min session
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <input
                      className="input is-danger"
                      type="integer"
                      placeholder="Session Length"
                      id="email"
                      value={time}
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                    /> */}
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
                    Book Session {buttonText}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default BookSessionForm;
