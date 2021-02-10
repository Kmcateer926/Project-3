import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

const TutorTableRow = ({
  _id,
  name,
  education,
  subjects,
  experience,
  approved,

  getTutors,
}) => {
  const deleteTutor = (id) => {
    axios
      .delete(`/api/tutors/${id}`)
      .then(() => {
        getTutors();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <tr>
      <td>{name}</td>
      <td>{education}</td>
      <td>{subjects}</td>

      <td>{experience}</td>

      
        <td
          class="fa"
          // href="/admin/:id"
          // style={{ margin: "5px" }}
        >
          <Link to={`/admin/${_id}`}>&#xf044;</Link>

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
            deleteTutor(_id);
          }}
        />
      </td>
    </tr>
  );
};

TutorTableRow.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    subjects: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
};

export default TutorTableRow;
