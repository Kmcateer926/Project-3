import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SessionRow = ({
  _id,
  tutor,
  date,
  sessionLength,
  time,
  approved,
  getSessions,
}) => {
  const deleteSession = (id) => {
    console.log(id, "test");
    axios
      .delete(`/api/sessions/${id}`)
      .then(() => {
        getSessions();
        console.log("getSessions");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="spacer" style={{ height: "75px" }}></div>
      <div className="columns">
        <div
          className="column is-10 is-offset-1"
          style={{
            border: "1px solid",
            height: "500px",
            borderRadius: "15px",
            boxShadow: "5px 2px 2px grey",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontFamily: "Special Elite, cursive",
            }}
          >
            Welcome to Your Teacher Hub <u>Parent</u> Account!
          </h1>
          <div className="spacer" style={{ height: "50px" }}></div>
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{
                height: "250px",
                border: "1px solid",
                borderRadius: "15px",
                boxShadow: "5px 2px 2px grey",
              }}
            >
              <h1
                style={{
                  fontSize: "35px",
                  fontFamily: "Special Elite, cursive",
                }}
              >
                Tutor Sessions
              </h1>
              <div>
                <table className="table is-bordered is-striped is-fullwidth is-hoverable">
                  <tbody>
                    <tr>
                      <th>{tutor}</th>
                      <th>{new Date(date).toLocaleString()}</th>
                      <th>{new Date(time).toTimeString()}</th>
                      <th>{sessionLength}</th>
                      <td class="fa">
                        <Link to={`/landing/${_id}`}>&#xf044;</Link>
                      </td>
                      <td
                        class="fa "
                        onClick={() => {}}
                        style={{ margin: "10px" }}
                      >
                        &#xf03a;
                      </td>
                      <td
                        class="fa"
                        onClick={() => {
                          deleteSession(_id);
                        }}
                        style={{ margin: "10px" }}
                      >
                        &#xf1f8;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SessionRow.propTypes = {
  _id: PropTypes.string.isRequired,
  tutor: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  sessionLength: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default SessionRow;
