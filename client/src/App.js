import {useEffect} from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Resources from "./containers/Resources/Resources";
import LearnMore from "./containers/LearnMore/LearnMore";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";


function App() {
  useEffect(() => {
    axios.get("/api/config").then(response => {
      console.log(response.data);
      // alert(response.date.name);
    });
  }, []);
  return (
    <div className="App">
       <>
      <Router basename="/">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Resources" component={Resources} />
        <Route exact path="/LearnMore" component={LearnMore} />
      </Router>
    </>
    </div>
  );
}

export default App;
