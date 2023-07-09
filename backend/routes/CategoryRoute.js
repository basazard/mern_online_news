const express = require("express");
const router = express.Router();

const { index, store, articles } = require("../controllers/CategoryController");

router.get("/", index);
router.post("/", store);
router.get("/:category", articles);

module.exports = router;
