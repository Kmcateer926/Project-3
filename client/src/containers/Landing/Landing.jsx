import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionTableRow from "../../components/SessionTableRow/SessionTableRow";

const Landing = () => {
  const [sessions, setSessions] = useState([]);

  const getSessions = () => {
    axios.get("/api/sessions").then((response) => {
      setSessions(response.data);
    });
  };

  useEffect(() => {
    getSessions();
  }, []);

  const styles = {
    session: {
      fontFamily: "Special Elite, cursive",
      paddingTop: 25,
      paddingLeft: 35,
      paddingRight: 33,
      backgroundImage: `url("https://txcatholic.org/wp-content/uploads/2019/03/Chalkboard-books-and-apple-for-web.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      minHeight: "100vh",
      color: "#ffffff",
      behavior: "smooth",
    },
    heading: {
      color: "#FFFFFF",
      textAlign: "center",
    },
    background: {
      opacity: 0.7,
      fontSize: 24,
    },
    titleHead: {
      color: "#FFFFFF",
    },
  };

  return (
    <>
      <html style={{ margin: "0" }}>
        <div className="table-container" style={styles.session}>
          <h1 className="title is-2" style={styles.heading}>
            Scheduled Tutor Sessions
          </h1>
          <table
            className="table is-fullwidth is-bordered title is-3"
            style={styles.background}
          >
            <thead>
              <tr>
                <th>TUTOR</th>
                <th>STUDENT</th>
                <th>DATE</th>
                <th>SESSION LENGTH</th>
                <th>TIME</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <SessionTableRow
                  key={session._id}
                  {...session}
                  getSessions={getSessions}
                />
              ))}
            </tbody>
          </table>
        </div>
      </html>
    </>
  );
};

export default Landing;
