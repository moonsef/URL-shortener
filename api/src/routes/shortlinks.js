const router = require("express").Router();
const jwt = require("jsonwebtoken");
const shortLinksController = require("../controllers/shortlinks");
const { isAuthenticated } = require("../middlewares/auth");

router.use(isAuthenticated);

router.get("/", shortLinksController.index);
router.post("/create", shortLinksController.create);

module.exports = router;
