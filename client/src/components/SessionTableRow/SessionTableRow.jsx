import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

const SessionTableRow = ({
  _id,
  tutor,
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

  
  return (
    <tr>
      <td>{tutor}</td>
      <td>{date}</td>
      <td>{sessionLength}</td>

      <td>{time}</td>

      
        <td
          class="fa"
          // href="/admin/:id"
          // style={{ margin: "5px" }}
        >
          <Link to={`/landing/${_id}`}>&#xf044;</Link>

          {/* // 	className="fa"
												// 	onClick={() => {}}
												// 	style={{ */}
          {/* // 		margin: "10px",
												// 		marginBottom: "5px",
												// 	}}
												// > */}
          {/* // 	&#xf044; */}
        </td>
      
      {/* <td>
        <Link to={`/admin/${_id}`}>
          <button icon={faEdit} />
        </Link>
      </td> */}
      <td>
        <button
          //   icon={faTrash}
          onClick={() => {
            deleteSession(_id);
          }}
        />
      </td>
    </tr>
  );
};

SessionTableRow.propTypes = {
    _id: PropTypes.string.isRequired,
    tutor: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    sessionLength: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
};

export default SessionTableRow;
