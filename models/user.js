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

UserSchema.methods.comparePassword = function(candidatePassword, checkPassword) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err) return checkPassword(err);
    checkPassword(null, isMatch);
  });
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
