import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

const SessionTableRow = ({
  _id,
  student,
  date,
  sessionLength,
  time,
  approved,

  getSessions,
}) => {
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
      // color: "#ffffff"
    },
  };

  return (
    <>
      <tr className="session" style={styles.session}>
        <td>{student}</td>
        <td>{date}</td>
        <td>{sessionLength}</td>

        <td>{time}</td>

        <td class="fa">
          <Link to={`/landing/${_id}`}>&#xf044;</Link>
        </td>

        <td>
          <button
            class="fas fa-trash-alt"
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
