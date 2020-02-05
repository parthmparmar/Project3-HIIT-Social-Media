const db = require("../models");

module.exports = {
	// Find user and authenticate
	findUser: function(req, res) {
		//checks that email is present or not
		db.User.findOne({"email": req.body.email}, (err, user) =>{
			if(!user) res.json({message: "Login failed, user not found"})

			// If email is found then it will compare password
			user.comparePassword(req.body.password, (err, isMatch)=>{
				if(err) throw err;
				if(!isMatch) return res.status(400).json({
					message: "Wrong Password"
				});
				res.status(200).send(user);
			});
		});
	},

	// Update user profile into DB
	updateUser: function(req, res) {
		//TODO: add code to update user info
		res.status(200).send({message: "Hit the 'updateUser' controller"});
	},

	// Save new user to DB 
	create: function(req, res) {
		const user = new db.User({
			email: req.body.email,
			password: req.body.password
		}).save((err, response) => {
			if (err) res.status(400).send(err);
			res.status(200).send(response);
		});
	}
 };
