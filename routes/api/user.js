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

module.exports = router;
