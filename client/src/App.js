import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UserRegister from "./pages/UserRegister";
import UserStats from "./pages/userStats";
import Members from "./pages/Members";
// import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";


class App extends Component {
	state = {
		isAuthenticated: false,
		userData: {}
	};

	handleLogout = _ => {
		this.setState({isAuthenticated: false});
	}

	assignUser = userData => {
		this.setState({ userData: userData });
	};

	isAuthenticated = () => {
		this.setState({ isAuthenticated: true });
	};

	render() {
		console.log("State from App Component: ", this.state);
		return (
			<Router>
				<div>
					<NavBar isAuthed={this.state.isAuthenticated} logout={this.handleLogout}/>
					<Switch>
						{/* Landing Page Route */}
						<Route
							exact
							path="/"
							render={props => <Landing isAuthed={this.isAuthenticated} assignUser={this.assignUser} userData={this.state.userData} />}
						/>
						{/* Initial User Signup Route */}
						<Route exact path="/login" render={props => <Login isAuthed={this.isAuthenticated} assignUser={this.assignUser} />} />
						<Route exact path="/register" render={props => <Register />} />
						{/* User Profile/Dashboard Route */}
						<PrivateRoute exact path="/dashboard" isAuthed={this.state.isAuthenticated}>
							<Dashboard userData={this.state.userData} assignUser={this.assignUser}/>
						</PrivateRoute>
						{/* Secondary User Registration Route */}
						<PrivateRoute exact path="/userRegister" isAuthed={this.state.isAuthenticated}>
							<UserRegister assignUser = {this.assignUser} userData = {this.state.userData} />
						</PrivateRoute>	
						<PrivateRoute exact path="/userStats" isAuthed={this.state.isAuthenticated}>
							<UserStats assignUser = {this.assignUser} userData = {this.state.userData} />
						</PrivateRoute>	
						<PrivateRoute exact path="/Members" isAuthed={this.state.isAuthenticated}>
							<Members assignUser = {this.assignUser} userData = {this.state.userData} />
						</PrivateRoute>	
						{/* Catch all Route - 404 page */}
						<Route path="*" component={() => <p> 404 Page not found </p>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

// If state.isAuthenticated is true
// Function will return a router component and render children component
// else it will return a router component with a Redirect component
function PrivateRoute({ children, isAuthed, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthed ? (
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
}

export default App;
