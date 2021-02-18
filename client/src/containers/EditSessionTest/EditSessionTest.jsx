import React from "react";
import axios from "axios";
import board from "../../components/ChalkBG/chalkBoard.jpg";
import { useHistory } from "react-router-dom";
// import BookSession from "../../components/BookSession/BookSession";
import EditBookSession from "../../components/EditBookSession/EditBookSession";
// import ChalkBG from "../../components/ChalkBG/ChalkBG";

const EditSessionTest = () => {
	const history = useHistory();

	const handleFormSubmit = (e, sessionData, id) => {
		console.log(sessionData);
		console.log("click");
		e.preventDefault();
		axios
			.put(`/api/sessions/${id}`, sessionData)
			.then((response) => {
				console.log(response.data);
				history.push("/landing");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const styles = {
		edit: {
			backgroundImage: `url("https://t4.ftcdn.net/jpg/03/67/24/77/360_F_367247734_rml9UJtyflIYwvH5Sp6zQkAoxDOnksSS.jpg")`,
			backgroundSize: "cover",
			backgroundPosition: "center center",
			// backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			width: "100%",
			//   maxWidth: "2310vw",
			height: "100%",
			position: "fixed",
			minWidth: "100%",
			backgroundAttachment: "fixed",
			color: "#ffffff",
			textAlign: "center",
		},
	};

	//   const testSubmit = () => {
	//     console.log("test");
	//   };
	return (
		<>
			<body  style={styles.edit}>
				{/* <div className="columns">
          <div className="column"> */}
				{/* <h1 className="center-align">Add a New Parent</h1> */}
				{/* </div>
        </div> */}
				{/* </div> */}
				{/* <div className="column"> */}
				{/* <BookSession handleFormSubmit={handleFormSubmit} buttonText="Update"/> */}
				{/* {sessions.map((session)=>(
   <BookSession {...sessions} getSessions={getSessions}/>
          ))} */}
				<EditBookSession
					handleFormSubmit={handleFormSubmit}
					buttonText="Update"
				/>
        
				{/* </div> */}

        
			</body>
      
		</>
	);
};

export default EditSessionTest;
