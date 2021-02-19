import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//table for sessions to be placed
//table populates in landing
const SessionTableRow = ({
  _id,
  tutor,
  student,
  date,
  sessionLength,
  time,
  getSessions,
}) => {
  //axios call to delete sessions with the onclick below on line 62
  const deleteSession = (id) => {
    axios
      .delete(`/api/sessions/${id}`)
      .then(() => {
        getSessions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const styles = {
    session: {
      fontFamily: "Special Elite, cursive",
      paddingTop: 25,
      paddingLeft: 35,
      paddingRight: 35,
      fontSize: 20,
      fontWeight: 300,
    },
  };
  //table for all the sessions in the data base
  return (
    <>
      <tr className="session" style={styles.session}>
        <td>{tutor?.name}</td>
        <td>{student}</td>
        <td>{new Date(date).toLocaleDateString()}</td>
        <td>{sessionLength}</td>
        <td>{time}</td>
        <td style={{ textAlign: "center" }}>
          <button
            className="fa button"
            style={{ backgroundColor: "#94b8b8", filter: "contrast(250%)" }}
          >
            <Link to={`/landing/${_id}`}>&#xf044;</Link>
          </button>
        </td>
        <td style={{ textAlign: "center" }}>
          <button
            className="fas fa-trash-alt button "
            style={{ backgroundColor: "yellow", filter: "contrast(400%)" }}
            onClick={() => {
              deleteSession(_id);
            }}
          />
        </td>
      </tr>
    </>
  );
};

SessionTableRow.propTypes = {
  _id: PropTypes.string.isRequired,
  student: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  sessionLength: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default SessionTableRow;
