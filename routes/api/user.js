const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
	.route("/signup")
	.post(usersController.create);

router
	.route("/signin")
	.post(usersController.findUser);

router
	.route("/logout")
	.post(usersController.logoutUser);

router
	.route("/update")
	.post(usersController.updateUser);

router
	.route("/stats/update")
	.post(usersController.updateStats);

router
	.route("/members/all")
	.get(usersController.getAllMembers);

module.exports = router;
