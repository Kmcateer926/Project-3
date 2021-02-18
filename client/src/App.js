import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import ParentSignUp from "./containers/NewParent/NewParent";
import Landing from "./containers/Landing/Landing.jsx";
import axios from "axios";
import Navbar from "./components/NavbarHome/NavbarHome";
import Directory from "./containers/Directory/Directory.jsx";
import Footer from "./components/Footer/Footer";
import ReturnParent from "./containers/ReturnParent/ReturnParent";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import LoginForm from "./components/LoginForm/LoginForm";
import EditSessionTest from "./containers/EditSessionTest/EditSessionTest";
import Admin from "./containers/Admin/Admin";
import NewSession from "./containers/NewSession/NewSession";
import NewTutor from "./containers/NewTutor/NewTutor";
import About from "./containers/About/About.jsx";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    });
  }, []);

  const [token, setToken] = useState("");
  return (
    <div className="App">
      <>
        <Router>
          <Navbar token={token} setToken={setToken} />
          <Route exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/landing"
            component={Landing}
            token={token}
          />
          <Route exact path="/directory" component={Directory} />
          <Route exact path="/about" component={About} />
          <Route exact path="/parentsignup" component={ParentSignUp} />
          <Route
            exact
            path="/loginform"
            component={(props) => <LoginForm {...props} setToken={setToken} />}
          />
          <Route exact path="/returnparent" component={ReturnParent} />
          <Route exact path="/landing/:id" component={EditSessionTest} />
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/landing/new-session" component={NewSession} />
          <Route exact path="/admin/new-tutor" component={NewTutor} />
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
