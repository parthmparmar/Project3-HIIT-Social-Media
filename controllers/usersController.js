const passport = require("passport");
const db = require("../models");

module.exports = {

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

	create: function(req, res) {
		const user = new db.User({
			email: req.body.email,
			password: req.body.password
		}).save((err, response) => {
			if (err) res.status(400).send(err);
			res.status(200).send(response);
		});
	},

	// Given an email and password, will find a User with the given email and verify that the given password is correct. If the password is correct, we will issue a signed token to the requester.
	authenticate: function(req, res) {
		const { email, password } = req.body;
		db.User.findOne({ email }, function(err, user) {
			if (err) {
				console.error(err);
				res.status(500).json({
					error: "Internal error please try again"
				});
			} else if (!user) {
				res.status(401).json({
					error: "Incorrect email or password"
				});
			} else {
				user.isCorrectPassword(password, function(err, same) {
					if (err) {
						res.status(500).json({
							error: "Internal error please try again"
						});
					} else if (!same) {
						res.status(401).json({
							error: "Incorrect email or password"
						});
					} else {
						// Issue token
						const payload = { email };
						const token = jwt.sign(payload, secret, {
							expiresIn: "1h"
						});
						res.cookie("token", token, { httpOnly: true }).sendStatus(200);
					}
				});
			}
		});
	}
};
