const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
	.route("/signup")
	.post(usersController.create2);

router
	.route("/signin")
	.post(usersController.findUser);

router
	.route("/logout")
	.post(usersController.logOutUser);

router
	.route("/update")
	.post(usersController.updateUser);

router
	.route("/stats/update")
	.post(usersController.updateStats);

router
	.route("/wods")
	.get(usersController.findWods);

router
	.route("/members/all")
	.get(usersController.getAllMembers);

router
	.route("/token")
	.post(usersController.checkToken);

router
	.route("/avatar")
	.post(usersController.avatar)

module.exports = router;
