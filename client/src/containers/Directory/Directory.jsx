// import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
  
import React, { useEffect, useState, useHistory } from "react";
import axios from "axios";
// import BookSession from "../../components/BookSession/BookSession";
// import ChalkBG from "../../components/ChalkBG/ChalkBG";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
import TutorCard from "../../components/TutorCard/TutorCard";

const Tutors = () => {
  const [tutors, setTutors] = useState([]);
  // const history = useHistory();
  useEffect(() => {
    axios
      .get("/api/tutors")
      .then((response) => {
        setTutors(response.data);
        // history.push("/landing");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">Available Tutors</h1>
        </div>
      </div>
      <div className="row">
        {tutors.map((tutor) => (
          <TutorCard {...tutor} key={tutor._id} />
        ))}
      </div>
    </div>
  );
};

export default Tutors;

// const NewSession = () => {

//   const history = useHistory()

//   const handleFormSubmit = (e, sessionData) => {
//     e.preventDefault();
//     axios
//       .post("/api/sessions", sessionData)
//       .then((response) => {
//         console.log(response.data);
//         history.push("/landing");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   // const [sessions, setSessions] = useState([]);

//   // useEffect(()=>{
//   //   getSessions()
//   // }, []);

//   // const getSessions = () => {
//   //   axios.get("/api/sessions")
//   //   .then((response) => {
//   //     console.log(response.data);
//   //     setSessions(response.data)
//   //   }).catch((err)=> {
//   //     console.log(err);
//   //   })
//   // }

//   return (
//     <ChalkBG>
//     <div className="container">
//       <div className="row">
//         <div className="col">
//           {/* <h1 className="center-align">Add a New Parent</h1> */}
//         </div>
//       </div>
//       <div className="row">
//         <BookSession
//           handleFormSubmit={handleFormSubmit}
//           buttonText="Create New Session"
//         />
//         {/* {sessions.map((session)=>(
//  <BookSession {...sessions} getSessions={getSessions}/>
//         ))} */}
//       </div>
//     </div>
//     </ChalkBG>
//   );
// };

// export default NewSession;
