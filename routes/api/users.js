const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
	.route("/")
	// .get(wodbookController.findAll)
	.post(usersController.create);

// Matches with "/api/books/:id"
// router
// 	.route("/:id")
// 	.get(booksController.findById)
// 	.put(booksController.update)
// 	.delete(booksController.remove);

module.exports = router;
