import React from "react";
import axios from "axios";
import "./TutorTableRow.css";
import PropTypes from "prop-types";
import Switch from "../../components/Switch/Switch";
//shows all tutor cards populated
const TutorTableRow = ({
  _id,
  name,
  education,
  subjects,
  experience,
  approved,
  getTutors,
}) => {
  //delete tutor api call
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
  //edit tutor api call that utilizes the EditBookSession component
  const editTutor = (id) => {
    axios
      .put(`/api/tutors/${id}`, { approved: !approved })
      .then((response) => {
        console.log(response.data);
        getTutors();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //switch is passed bellow to approve tutors through admin
  return (
    <>
      <tr id="data">
        <td>{name}</td>
        <td>{education}</td>
        <td>{subjects}</td>
        <td style={{ textAlign: "center" }}>{experience}</td>
        <td style={{ textAlign: "center" }}>
          <label>
            <Switch
              id={_id}
              isOn={approved}
              handleToggle={() => editTutor(_id)}
            />
          </label>
        </td>
        <td style={{ textAlign: "center" }}>
          <button
            className="fa fa-trash-alt"
            style={{ fontSize: "24px", marginTop: "25px" }}
            onClick={() => {
              deleteTutor(_id);
            }}
          />
        </td>
      </tr>
    </>
  );
};

TutorTableRow.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  subjects: PropTypes.string.isRequired,
  approved: PropTypes.bool,
  experience: PropTypes.number.isRequired,
};

export default TutorTableRow;
