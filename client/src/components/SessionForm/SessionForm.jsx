import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SessionForm = ({ buttonText, handleFormSubmit }) => {
  const [student, setStudent] = useState("");
  const [date, setDate] = useState("");
  const [sessionLength, setSessionLength] = useState("");
  const [time, setTime] = useState("");

  // const [approved, setApproved] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`/api/sessions/${id}`)
        .then((response) => {
          console.log(response.data);
          const {
            student,
            date,
            sessionLength,
            time,
            // approved,
          } = response.data;
          setStudent(student);
          setDate(date);
          setSessionLength(sessionLength);
          setTime(time);
          // setApproved(approved);
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
              student,
              date,
              sessionLength,
              time,
              // approved,
            },
            id
          );
        }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              style={{
                fontFamily: "Special Elite, cursive",
                fontSize: "15px"
              }}
              placeholder="Student Name"
              id="student"
              type="text"
              name="student"
              value={student}
              onChange={(e) => {
                setStudent(e.target.value);
              }}
            />
            {/* <label htmlFor="title">Student Name</label> */}
          </div>
          <div className="input-field col s6">
            <input
                style={{
                  fontFamily: "Special Elite, cursive",
                  fontSize: "15px"
               }}
              placeholder="Date"
              id="bulmaCalendar"
              type="date"
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            {/* <label htmlFor="price">Date</label> */}
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select
                style={{
                  fontFamily: "Special Elite, cursive",
                  fontSize: "15px"
               }}
              type="text"
              value={sessionLength}
              onChange={(e) => {
                setSessionLength(e.target.value);
              }}
            >
              <option>Session(Mins)</option>
              <option>30</option>
              <option>60</option>
              <option>90</option>
            </select>
    
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select
                style={{
                  fontFamily: "Special Elite, cursive",
                  fontSize: "15px"
               }}
              type="text"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            >
              <option>Time</option>
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
       
        

        <button type="submit" className="button is-light is-outlined"style={{
              fontFamily: "Special Elite, cursive",
           }}>
          {buttonText}
        </button>
      </form>
    </>
  );
};
export default SessionForm;
