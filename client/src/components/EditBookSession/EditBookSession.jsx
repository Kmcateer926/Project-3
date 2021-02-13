import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import ChalkBG from "../ChalkBG/ChalkBG";
const EditBookSession = ({ buttonText, handleFormSubmit }) => {
  const [student, setStudent] = useState("");
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
    //   paddingTop: 40,
    },
  };
  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`/api/sessions/${id}`)
        .then((response) => {
          console.log(response.data);
          const { student, date, time, sessionLength } = response.data;
          setStudent(student);
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
      {/* <div className="spacer"></div> */}
      <div>
        <h1
          style={{
            fontFamily: "Special Elite, cursive",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          Edit Session
        </h1>
        {/* <div className="spacer" style={{ height: "50px" }}></div> */}
      </div>
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
        {/* <div className="card-image">
          <figure className="image is-128x128">
            <img
              // src={teachers.image}
              // alt={teachers.name}
              style={{ borderRadius: "15px" }}
            />
          </figure>
        </div> */}
        <div className="card">
          <div className="card-content">
            <form className="column">
              <div
                className="content"
                style={{ fontFamily: "Special Elite, cursive" }}
              >
                <strong>Name: </strong>
            
                <input
                  className="input"
                  type="text"
                  id="tutor"
                  style={{ fontFamily: "Special Elite, cursive" }}
                  value={student}
                  onChange={(e) => {
                    setStudent(e.target.value);
                  }}
                />
                <br />
              </div>
              <div
                className="content"
                style={{ fontFamily: "Special Elite, cursive" }}
              >

                <strong>Date: </strong>
                {" "}
                      <input
                        className="input"
                        type="date"
                        id="date"
                        style={{ fontFamily: "Special Elite, cursive" }}
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />

                {/* {teachers.name} */}
                {/* <input
                  className="input is-danger"
                  type="text"
                  id="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                /> */}
                <br />
              </div>
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
              {/* </div> */}
              <div className="booking-deets">
                {/* <p>
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
                </p> */}
                {/* TESTED THESE INPUTS TO MATCH THE NEW-SESSION */}
                {/* <input
                        className="input is-danger"
                        type="text"
                        id="time"
                        value={time}
                        onChange={(e) => {
                          setTime(e.target.value);
                        }}
                      />
                       <input
                        className="input is-danger"
                        type="text"
                        id="sessionLength"
                        value={sessionLength}
                        onChange={(e) => {
                          setSessionLength(e.target.value);
                        }}
                      /> */}
                <p>
                  <strong style={{fontFamily: "Special Elite, cursive"}}>
                    Time:{" "}
                    <div className="field">
                      <div className="control">
                        <div className="select">

                          <select type="text" value={time}
                            style={{ fontFamily: "Special Elite, cursive" }}
                          onChange={(e) => {
                            setTime(e.target.value);
                          }}

                          >
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
                    Session Length:{" "}
                    <div className="field" 
                    style={{paddingBottom: "25px",
                    fontFamily: "Special Elite, cursive"}}>
                      <div className="control">
                        <div className="select">
                          <select
                            type="text"
                            style={{ fontFamily: "Special Elite, cursive" }}
                            value={sessionLength}
                            onChange={(e) => {
                              setSessionLength(e.target.value);
                            }}
                          >
                            <option>Select Session Length in Minutes</option>
                            <option>30</option>
                            <option>60</option>
                            <option>90</option>
                          </select>
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
                    background: " #94b8b8",
                  }}
                  onClick={(e) => {
                    handleFormSubmit(
                      e,
                      {
                        student,
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
                  <Link style={styles.link}>{buttonText}</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default EditBookSession;
