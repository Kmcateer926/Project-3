import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import ParentSignUp from "./containers/NewParent/NewParent";
import Landing from "./containers/Landing/Landing.jsx";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Directory from "./containers/Directory/Directory.jsx";
import Footer from "./components/Footer/Footer";
import ReturnParent from "./containers/ReturnParent/ReturnParent";
import Session from "./containers/Session/Session.jsx";
import EditSession from "./containers/EditSession/EditSession";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
      // alert(response.date.name);
    });
  }, []);

  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/directory" component={Directory} />
          <Route exact path="/session" component={Session} />
          <Route exact path="/parentsignup" component={ParentSignUp} />
          <Route exact path="/editsession" component={EditSession} />
          <Route exact path="/loginform" component={LoginForm} />
          <Route exact path="/returnparent" component={ReturnParent} />
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
