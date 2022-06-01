const router = require("express").Router();
const shortLinksController = require("../controllers/shortlinks");

router.get("/", shortLinksController.index)

module.exports = router;