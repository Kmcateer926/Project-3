import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import ParentLogin from "./containers/ParentLogIn/ParentLogin";
import ParentSignUp from "./containers/NewParent/NewParent";
import Landing from "./containers/Landing/Landing.jsx";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Directory from "./containers/Directory/Directory.jsx";
import Footer from "./components/Footer/Footer"

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
					<Route exact path="/parentlogin" component={ParentLogin} />
					<Route exact path="/landing" component={Landing} />
					<Route exact path="/directory" component={Directory} />
					<Route exact path="/parentsignup" component={ParentSignUp} />
					<Footer />
				</Router>
			</>
		</div>
	);
}

export default App;
