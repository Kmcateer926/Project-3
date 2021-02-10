import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SessionForm = ({ buttonText, handleFormSubmit }) => {
  const [tutor, setTutor] = useState("");
  const [date, setDate] = useState("");
  const [sessionLength, setSessionLength] = useState("");
  const [time, setTime] = useState("");

  const [approved, setApproved] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`/api/sessions/${id}`)
        .then((response) => {
          console.log(response.data);
          const { tutor, date, sessionLength, time, approved } = response.data;
          setTutor(tutor);
          setDate(date);
          setSessionLength(sessionLength);
          setTime(time);
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
              tutor,
              date,
              sessionLength,
              time,
              approved,
            },
            id
          );
        }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Tutor Name"
              id="tutor"
              type="text"
              name="tutor"
              value={tutor}
              onChange={(e) => {
                setTutor(e.target.value);
              }}
            />
            <label htmlFor="title">Tutor Name</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Date"
              id="date"
              type="text"
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <label htmlFor="price">Date</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="SessionLength"
              id="time"
              type="text"
              name="time"
              value={sessionLength}
              onChange={(e) => {
                setSessionLength(e.target.value);
              }}
            />
            <label htmlFor="description">Session Length</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="SessionLength"
              id="time"
              type="text"
              name="time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
            <label htmlFor="description">Time</label>
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
        </div>
        {/* </div> */}
        <div className="row">
          <div className="col s12">
            <button className="waves-effect waves-light btn">
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default SessionForm;
