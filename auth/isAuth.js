const {verify} = require("jsonwebtoken");

module.exports = isAuth = token => {
	if (!token) throw new Error("You need to login.");
	const { userId } = verify(token, process.env.ACCESS_TOKEN);
	return userId;
};
