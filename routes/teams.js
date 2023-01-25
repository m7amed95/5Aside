var express = require("express");
var router = express.Router();
const teamsCtrl = require("../controllers/teams");
const playerCtrl = require("../controllers/players");

router.post("/teams/:id/players", playerCtrl.create);

router.get("/", teamsCtrl.index);
router.get("/new", teamsCtrl.new);
router.post("/", teamsCtrl.create);

module.exports = router;
