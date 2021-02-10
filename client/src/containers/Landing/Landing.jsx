import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionRow from "../../components/SessionRow/SessionRow";
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
	  paddingRight: 33
    },
  };

  return (
    // <ChalkBG>

    <div class="table-container" style={styles.session}>
      <table class="table is-fullwidth is-bordered">
        <thead>
          <tr>
            <th>Tutor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Session Length</th>
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

    // {/* </ChalkBG> */}
  );
};

export default Landing;
