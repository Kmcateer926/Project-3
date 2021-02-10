import React, { useState, useEffect } from "react";
import axios from "axios";
// import SessionRow from "../../components/SessionRow/SessionRow";
// import BookSession from "../../components/BookSession/BookSession"
import SessionTableRow from "../../components/SessionTableRow/SessionTableRow"

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

  return (
    <div>
      {sessions.map((session) => (
        <SessionTableRow key={session._id} {...session} getSessions={getSessions} />
      ))}
      {/* <BookSession/> */}
    </div>
  );
};

export default Landing;
