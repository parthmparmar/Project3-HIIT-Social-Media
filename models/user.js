const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
let SALT = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	gender: {
		type: String
	},
	birthday: {
		type: Date
	},
	box: {
		type: String
	}
});

// Hashing the password before saving to mongoDB
UserSchema.pre("save", function(next) {
	var user = this;

	if (user.isModified("password")) {
		bcrypt.genSalt(SALT, function(err, salt) {
			if (err) return next(err);

			bcrypt.hash(user.password, salt, function(err, hash) {
				if (err) return next(err);
				user.password = hash;
				next();
			});
		});
	} else {
		next();
	}
});

// This method will be added to each new user and it will be use to 
// authenticate user
UserSchema.methods.comparePassword = function(candidatePassword, checkPassword) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err) return checkPassword(err);
    checkPassword(null, isMatch);
  });
}

// Method will calculate user's age
UserSchema.methods.calculateAge = function() {
	var ageDifMs = Date.now() - this.birthday.getTime();
	var ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getDate.getUTCFullYear() - 1970);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
