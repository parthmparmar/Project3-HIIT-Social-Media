import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import API from "./utils/API";

import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UserRegister from "./pages/UserRegister";
import UserStats from "./pages/userStats";
import Members from "./pages/Members";
import Login from "./pages/Login";

const Cookies = require("js-cookie");

export const UserContext = React.createContext();

function App() {
	const [userData, setUserData] = useState({});
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const logOutUser = () => {
		//Remove token from user Db
		API.logOutUser(userData._id)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
		// clear Cookie
		Cookies.remove("token");
		Cookies.remove("location");
		// Clear user from state
		setUserData({});
		setIsAuthenticated(false);
		// Navigate back to Login page
		return <Redirect to="/login" />;
	};
	
	// First thing, check if a token exist
	useEffect(() => {
		function checkToken() {
			if (Cookies.get("token")) {
				API.checkUserToken({ token: Cookies.get("token") })
				.then(res => {
						setUserData(res.data);
						setIsAuthenticated(true);
					})
					.catch(err => console.log(err));
				}
		}
		checkToken();
	}, []);
	
	return (
		<UserContext.Provider value={{ userInfo: [userData, setUserData], userAuth: [isAuthenticated, setIsAuthenticated] }}>
			<Router>
				<NavBar logOutUser={logOutUser} />
				<Switch>
					<Route exact path="/login" render={props => <Login isAuthed={setIsAuthenticated} assignUser={setUserData} />} />
					<Route exact path="/register" render={props => <Register />} />
					<PrivateRoute exact path="/dashboard" isAuthed={isAuthenticated}>
						<Dashboard userData={userData} assignUser={setUserData} />
					</PrivateRoute>
					<PrivateRoute exact path="/userRegister" isAuthed={isAuthenticated}>
						<UserRegister assignUser={setUserData} userData={userData} />
					</PrivateRoute>
					<PrivateRoute exact path="/userStats" isAuthed={isAuthenticated}>
						<UserStats assignUser={setUserData} userData={userData} />
					</PrivateRoute>
					<PrivateRoute exact path="/Members" isAuthed={isAuthenticated}>
						<Members assignUser={setUserData} userData={userData} />
					</PrivateRoute>
					<Route exact path="/" component={Landing} />
					<Route path="*" component={() => <p> 404 Page not found </p>} /> {/* Catch all Route - 404 page */}
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

// If state.isAuthenticated is true
// Function will return a router component and render children component
// else it will return a router component with a Redirect component
function PrivateRoute({ children, isAuthed, ...rest }) {
	return <Route {...rest} render={() => (isAuthed ? children : <Redirect to={"/"} />)} />;
}

export default App;
