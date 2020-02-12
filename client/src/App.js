import React, { useState, useEffect } from 'react';
// import { navigate } from '@reach/router';
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


export const UserContext = React.createContext();

function App() {
	const [userData, setUserData] = useState({});
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [accessToken, setAccessToken] = useState("");

	const logOutUser = async () => {
		console.log("Loging out....");
		await fetch("http://localhost:3000/api/user/logout", {
			method: "POST",
			credentials: "include" // Needed to include the cookie
		});
		// Clear user from context
		setUserData({});
		// Navigate back to startpage
		return <Redirect to="/login" />
	};
	
	// First thing, check if a refreshtoken exist
  // useEffect(() => {
  //   async function checkRefreshToken() {
  //     const result = await (
	// 			await fetch("http://localhost:3000/api/user/refresh_token", {
	// 				method: "POST",
	// 				credentials: "include", // Needed to include the cookie
	// 				headers: {
	// 					"Content-Type": "application/json"
	// 				}
	// 			})
	// 		).json();
  //       setAccessToken({
  //         accesstoken: result.accesstoken,
  //       });
  //   }
  //   // checkRefreshToken();
  // }, []);

	// const handleLogout = _ => {
	// 	setIsAuthenticated(false);
	// }

	// const assignUser = userData => {
	// 	setUserData(userData);
	// };

	// const AuthenticateUser = () => {
	// 	setIsAuthenticated(true);
	// };

		console.log("State from App Component: ", userData);
		return (
			<UserContext.Provider value={{userInfo: [userData, setUserData], userAuth: [isAuthenticated, setIsAuthenticated]}}>
				<Router>
					
							<NavBar logOutUser={logOutUser} />
							<Switch>
								{/* Landing Page Route */}
								<Route exact path="/" render={props => <Landing />}
								/>
								{/* Initial User Signup Route */}
								{/* <Route exact path="/login" render={props => <Login isAuthed={isAuthenticated} assignUser={assignUser} />} /> */}
								{/* <Route exact path="/register" render={props => <Register />} /> */}
								{/* User Profile/Dashboard Route */}
								{/* <PrivateRoute exact path="/dashboard" isAuthed={isAuthenticated}>
									<Dashboard userData={userData} assignUser={assignUser}/>
								</PrivateRoute> */}
								{/* Secondary User Registration Route */}
								{/* <PrivateRoute exact path="/userRegister" isAuthed={isAuthenticated}>
									<UserRegister assignUser = {assignUser} userData = {userData} />
								</PrivateRoute>	 */}
								{/* <PrivateRoute exact path="/userStats" isAuthed={isAuthenticated}>
									<UserStats assignUser = {assignUser} userData = {userData} />
								</PrivateRoute>	 */}
								{/* <PrivateRoute exact path="/Members" isAuthed={isAuthenticated}>
									<Members assignUser = {assignUser} userData = {userData} />
								</PrivateRoute>	 */}
								{/* Catch all Route - 404 page */}
								<Route path="*" component={() => <p> 404 Page not found </p>} />
							</Switch>
					
					
				</Router>
			</UserContext.Provider>
		);
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
