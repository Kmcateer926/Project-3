// import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
import board from "../../components/ChalkBG/chalkBoard.jpg";
import React, { useEffect, useState, useHistory } from "react";
import axios from "axios";
// import BookSession from "../../components/BookSession/BookSession";
// import ChalkBG from "../../components/ChalkBG/ChalkBG";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
import TutorCard from "../../components/TutorCard/TutorCard";

const Tutors = () => {
	const [tutors, setTutors] = useState([]);

	useEffect(() => {
		axios
			.get("/api/tutors")
			.then((response) => {
				setTutors(response.data);
				console.log(tutors);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	

	return (
		 <>
		 <body style={{backgroundImage:`url(${board})`}}>
			<div style={{ height: "50px" }}></div>
			<div className="container">
				
				<div className="column">
					<h1
						style={{
							textAlign: "center",
							fontFamily: "Special Elite, cursive",
							fontSize: "40px",
							color:"white"
						}}
					>
						Tutor Directory
					</h1>
				</div>

				<div
					className="columns"
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{tutors.map((tutor) => (
						<TutorCard {...tutor} key={tutor._id} />
					))}
				</div>
			</div>
			</body>
		</>
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
