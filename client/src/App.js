import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";

class App extends Component {

	state = {
		isAuthenticated: false
	}

	isAuthenticated = () => {
		this.setState({isAuthenticated: true})
	}

	render() {
		console.log(<PrivateRoute />);
		return (
			<Router>
				<div>
					<NavBar />
					<Switch>
						<Route exact path="/" render={props => <Landing isAuthed={this.isAuthenticated} />} />
						<Route exact path="/register" component={Register} />
						<PrivateRoute exact path="/dashboard" isAuthed={this.state.isAuthenticated}>
							<Dashboard />
						</PrivateRoute>
						<Route path="*" component={() => <p> 404 Page not found </p>} />
					</Switch>
				</div>
			</Router>
		);
	}
}


function PrivateRoute({ children,isAuthed, ...rest }) {
  console.log({...rest}, isAuthed);
  let isCool = isAuthed;
	return (
		<Route /// path="/dashboard"
			{...rest}
      render={({ location }) =>
				isCool ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default App;
