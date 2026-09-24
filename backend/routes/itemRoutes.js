const express = require("express");
const {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(protect); // Guard all item routes

router.route("/")
  .get(getItems)
  .post(createItem);

router.route("/:id")
  .put(updateItem)
  .delete(deleteItem);

module.exports = router;