const router = require("express").Router();
const shortLinksController = require("../controllers/shortlinks");

router.get("/", shortLinksController.index)
router.post("/create", shortLinksController.create)

module.exports = router;