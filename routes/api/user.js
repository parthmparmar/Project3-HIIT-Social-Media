const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
	.route("/signup")
	.post(usersController.create);

router
	.route("/signin")
	.post(usersController.findUser);

router
	.route("/update")
	.post(usersController.updateUser);

router
	.route("/stats/update")
	.post(usersController.updateStats);

router
	.route("/wods")
	.get(usersController.findWods);

module.exports = router;
