import React, { useState } from "react";


const EditSessionForm = ({ handleFormSubmit }) => {
  const [tutor, setTutor] = useState("");
  const [sessionLength, setSessionLength] = useState("");
  //   const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
 
  //   const [subjects, setSubjects] = useState("");
  //   const [id, setId] = useState(true);
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
      <div>
        <div className="spacer" style={{ height: "70px" }}></div>
        <div className="container">
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
              });
            }}
          >
            <div
              className="column is-8 is-offset-2 is-centered"
              style={{
                border: "1px solid",
                height: "500px",
                borderRadius: "15px",
              }}
            >
              <h1
                style={{
                  fontSize: "40px",
                  fontFamily: "Special Elite, cursive",
                  textAlign: "center",
                }}
              >
                Tutor Session
              </h1>
              <div className="spacer" style={{ height: "25px" }}></div>
              <div
                style={{
                  fontSize: "25px",
                  fontFamily: "Special Elite, cursive",
                  textAlign: "left",
                }}
              >
                <p>
                  <strong>
                    Tutor:{" "}
                    <input
                      className="input"
                      type="text"
                      id="name"
                      placeholder="Edit Tutor Name"
                      value={tutor}
                      onChange={(e) => {
                        setTutor(e.target.value);
                      }}
                    />
                  </strong>
                </p>
                <p>
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
                </p>
                <p>
                  <strong>
                    Date:{" "}
                    <input
                      className="input is-danger"
                      type="integer"
                      placeholder="Session Length"
                      id="email"
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
                    <input
                      className="input is-danger"
                      type="integer"
                      placeholder="Session Length"
                      id="email"
                      value={time}
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                    />
                  </strong>
                </p>

                <p style={{ textAlign: "center" }}>
                  {" "}
                  <button href="/landing">submit</button>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditSessionForm;
