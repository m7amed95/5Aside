var express = require("express");
var router = express.Router();
const teamsCtrl = require("../controllers/teams");

router.get("/", teamsCtrl.index);
router.get("/new", teamsCtrl.new);
router.post("/", teamsCtrl.create);
router.get("/:id", teamsCtrl.show);
router.delete("/team/:id", teamsCtrl.delete);
module.exports = router;
