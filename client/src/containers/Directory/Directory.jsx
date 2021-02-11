import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BookSession from "../../components/BookSession/BookSession";
import ChalkBG from "../../components/ChalkBG/ChalkBG";

const NewSession = () => {

  const history = useHistory()

  const handleFormSubmit = (e, sessionData) => {
    e.preventDefault();
    axios
      .post("/api/sessions", sessionData)
      .then((response) => {
        console.log(response.data);
        history.push("/landing");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const [sessions, setSessions] = useState([]);

  // useEffect(()=>{
  //   getSessions()
  // }, []);

  // const getSessions = () => {
  //   axios.get("/api/sessions")
  //   .then((response) => {
  //     console.log(response.data);
  //     setSessions(response.data)
  //   }).catch((err)=> {
  //     console.log(err);
  //   })
  // }

  return (
    
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <h1 className="center-align">Add a New Parent</h1> */}
        </div>
      </div>
      <div className="row">
        <BookSession
          handleFormSubmit={handleFormSubmit}
          buttonText="Create New Session"
        />
        {/* {sessions.map((session)=>(
 <BookSession {...sessions} getSessions={getSessions}/>
        ))} */}
      </div>
    </div>
    
  );
};

export default NewSession;
