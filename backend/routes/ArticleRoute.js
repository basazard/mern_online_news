const express = require("express");
const router = express.Router();

const { index, store, show } = require("../controllers/ArticleController");

router.get("/", index);
router.get("/:slug", show);
router.post("/", store);

module.exports = router;
