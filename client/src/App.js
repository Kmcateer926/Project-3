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
// import Session from "./containers/Session/Session.jsx";
// import EditSession from "./containers/EditSession/EditSession";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx"
import LoginForm from "./components/LoginForm/LoginForm";
import EditSessionTest from "./containers/EditSessionTest/EditSessionTest"
import Admin from "./containers/Admin/Admin";
import NewSession from "./containers/NewSession/NewSession";
import NewTutor from "./containers/NewTutor/NewTutor";
import About from "./containers/About/About.jsx"
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx"
function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
      // alert(response.date.name);
    });
  }, []);

  const [token, setToken] = useState("");
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/landing/:id" component={EditSessionTest} token={token} />
          <Route exact path="/directory" component={Directory} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/session" component={Session} /> */}
          <Route exact path="/parentsignup" component={ParentSignUp} />
          {/* <Route exact path="/editsession" component={EditSession} /> */}
          <Route exact path="/loginform" component={(props) => <LoginForm {...props} setToken={setToken} />} />
          <Route exact path="/returnparent" component={ReturnParent} />
          {/* <Route exact path="/landing/:id" component={EditSessionTest} /> */}
          <Route exact path="/landing/:id" component={EditSessionTest} />
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/landing/new-session" component={NewSession} />
          {/* <Route exact path="/admin/new-session" component={NewSession} /> */}
          {/* <Route exact path="/admin/:id" component={EditSessionTest}/> */}
          <Route exact path="/admin/new-tutor" component={NewTutor} />
          <Footer />
        </Router>
      </>
    </div>


  );
}

export default App;
