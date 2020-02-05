import axios from "axios";

export default {

	// Gets the book with the given id
	getUser: function(userData) {
		return axios.post("/api/user/signin", userData);
	},

	// Saves User to the database
	saveUser: function(userData) {
		console.log(userData)
		return axios.post("/api/user/signup", userData);
	}

};
