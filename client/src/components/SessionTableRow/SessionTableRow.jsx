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

//   const editSession = (id, approved) => {
//     axios
//       .put(`/api/sessions/${id}`, { approved: !approved })
//       .then((response) => {
//         console.log(response.data);
//         getSessions();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
  return (
    <tr>
      <td>{tutor}</td>
      <td>{date}</td>
      <td>{sessionLength}</td>
      
      <td>{time}</td>
      
      <td>
        <button
        //   icon={approved ? faStar : faStarOutline}
          onClick={() => {
            editSession(_id, approved);
          }}
        />
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

// SessionTableRow.propTypes = {
//   _id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   price: PropTypes.number.isRequired,
//   imageURL: PropTypes.string,
//   category: PropTypes.string,
//   quantity: PropTypes.number,
//   featured: PropTypes.bool,
//   getProducts: PropTypes.func.isRequired,
// };

export default SessionTableRow;