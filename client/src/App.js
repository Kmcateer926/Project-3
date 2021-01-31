import {useEffect} from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/config").then(response => {
      console.log(response.data);
      // alert(response.date.name);
    });
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
