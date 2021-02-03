import React, { useState, useEffect } from "react";
import "./Directory.css";
import teacherDirectory from "./teacherDirectory.json";
import CalendarApp from "../../components/Calendar/Calendar";

const Directory = () => {
  const [teachers, setTeachers] = useState({});

  useEffect(() => {
    setTeachers(teacherDirectory);
  }, [teachers]);

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
                <br />
                <br />
                <button
                  className="button is-small is-fullwidth is-info"
                  style={{
                    borderRadius: "10px",
                    fontSize: "25px",
                    fontWeight: "bold",
                    fontFamily: "Special Elite, cursive",
                  }}
                >
                  {/* TODO: add onclick to prompt teacher schedule */}
                  Book Session
                </button>
                <CalendarApp></CalendarApp>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Directory;
