import axios from "axios";

export default {
	// Login the user and authenticate
	getUser: function(userData) {
		return axios.post("/api/user/signin", userData);
	},

	// Update User profile
	updateUser: function(userData) {
		return axios.post("/api/user/update", userData);
	},

	// Saves User to the database
	saveUser: function(userData) {
		return axios.post("/api/user/signup", userData);
	}, 

	updateStats: function(userData) {
		return axios.post("/api/user/stats/update", userData);
	}
};
