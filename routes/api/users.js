const router = require("express").Router();
const wodbookController = require("../../controllers/wodbook");

// Matches with "/api/users"
router
	.route("/")
	.get(wodbookController.findAll)
	.post(wodbookController.create);

// Matches with "/api/books/:id"
// router
// 	.route("/:id")
// 	.get(booksController.findById)
// 	.put(booksController.update)
// 	.delete(booksController.remove);

module.exports = router;
