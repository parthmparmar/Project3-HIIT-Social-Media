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
	},
	status: {
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
	var today = new Date();
    var birthDate = new Date(this.birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

// Method to filter user data for sending to Client 
UserSchema.methods.filterUserData = function() {
	return {
		_id: this._id,
		firstName: this.firstName,
		lastName: this.lastName,
		gender: this.gender,
		box: this.box,
		status: this.status
	}
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
