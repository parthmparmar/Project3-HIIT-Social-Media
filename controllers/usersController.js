const db = require("../models");

module.exports = {
	// Find user and authenticate
	findUser: function(req, res) {
		console.log(req.body); 
		//checks that email is present or not
		db.User.findOne({"email": req.body.email}, (err, user) =>{
			// console.log(user)
			if(!user) {
				res.json({message: "Login failed, user not found"})
				return
			}
			

			// If email is found then it will compare password
			user.comparePassword(req.body.password, (err, isMatch)=>{
				if(err) throw err;
				if(!isMatch) return res.status(400).json({
					message: "Wrong Password"
				});

				userData = user.filterUserData();
				userData.age = user.calculateAge();
				// console.log(userData)
				res.status(200).send(userData);
			});
		});
	},

	// Update user profile into DB
	updateUser: function(req, res) {
		const userId = req.body.userId;
		const userData = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			birthday: req.body.birthday,
			gender: req.body.gender,
			box: req.body.box,
		};
		let heightObj = {height: req.body.height, date: new Date()};
		let weightObj = {weight: req.body.weight, date: new Date()};

		db.User.findByIdAndUpdate(userId, userData, {new: true}, function(err, dbUser){
			if (err){
				res.status(500).send({message:"Error in updating user data"});
				return;
			}
			db.User.findByIdAndUpdate(userId, {$push:{height: {$each: [heightObj], $position:0}, weight: {$each: [weightObj], $position:0}}}, {new: true}, function(err, dbUser){
				if (err){
					res.status(500).send({message:"Error in updating user data"});
					return;
				}
				userFilteredData = dbUser.filterUserData();
				userFilteredData.age = dbUser.calculateAge();
				res.status(200).send(userFilteredData);
			});

		});

	},

	updateStats: function(req, res){
		let statUpdateObj = {};
		const updateArray = req.body.filteredDataArray
		// console.log(updateArray);
		
		updateArray.forEach(element => {
			var name = Object.keys(element);
			var objAdd = {}
			objAdd[name[0]] = element[name];
			objAdd.date = new Date();
			statUpdateObj[name[0]] = {$each: [objAdd], $position:0}
		});
		// console.log(statUpdateObj);
		const userId = req.body.userId;

		db.User.findByIdAndUpdate(userId, {$push: statUpdateObj}, {new: true}, function(err, dbUser){
			if (err){
				res.status(500).send({message:"Error in updating user data"});
				return;
			}
			userFilteredData = dbUser.filterUserData();
			userFilteredData.age = dbUser.calculateAge();
			res.status(200).send(userFilteredData);
		});
	},

	getAllMembers: function(req, res){
		let membersFilteredArray = [];
		db.User.find({}, function(err, dbMembers){
			if (err){
				res.status(500).send({message:"Error in finding members"});
				return;
			};
			dbMembers.forEach(element => {
				filteredMember = element.filterUserData();
				filteredMember.age = element.calculateAge();
				membersFilteredArray.push(filteredMember);
			});
			res.status(200).send(membersFilteredArray);
		})
	},

	avatar: function(req, res){
		const userId = req.body.userId;
		const avatarObj = req.body.avatar;
		db.User.findByIdAndUpdate(userId, {avatar: avatarObj}, {new:true}, function(err, dbUser){
			if (err){
				res.status(500).send({message:"Error in finding members"});
				return;
			};
			userFilteredData = dbUser.filterUserData();
			userFilteredData.age = dbUser.calculateAge();
			res.status(200).send(userFilteredData);
		});

	},

	// Save new user to DB 
	 create:function(req, res) {
		const user = new db.User({
			email: req.body.email,
			password: req.body.password
		}).save((err, response) => {
			if (err) res.status(400).send(err);
			res.status(200).send(response);
		});
	}
 };
