import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children,isAuthed, ...rest }) {
//   console.log({...rest}, isAuthed);
  let isCool = isAuthed;
	return (
		<Route
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

export default PrivateRoute;