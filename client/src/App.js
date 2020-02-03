import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import index from "./pages/Index";

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={index} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
