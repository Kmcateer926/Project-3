import React, { useState, useEffect } from "react";
import axios from "axios";
// import SessionRow from "../../components/SessionRow/SessionRow";
// import ChalkBG from "../../components/ChalkBG/ChalkBG";
// import BookSession from "../../components/BookSession/BookSession"
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
      // backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      //   maxWidth: "2310vw",
      height: "100vh",
      position: "fixed",
	  backgroundAttachment: "fixed",
	
    },
	heading: {
	  color: "#FFFFFF",
	  textAlign: "center"
	},
	background: {
		backgroundBlendMode: "screen",
	}
  };
  

  return (
    <div class="table-container" style={styles.session}>
		<h1 className="title is-2" style={styles.heading}>Scheduled Tutor Sessions</h1>
      <table class="table is-fullwidth is-bordered" style={styles.background}>
        <thead >
          <tr>
            <th>Tutor</th>
            <th>Student</th>
            <th>Date</th>
            <th>Session Length</th>
            <th>Time</th>

            <th></th>
            <th></th>
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
  );
};

export default Landing;
