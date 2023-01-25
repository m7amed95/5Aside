var express = require("express");
var router = express.Router();
const teamsCtrl = require("../controllers/teams");
const statisticsCtrl = require("../controllers/statistics");

router.post("/teams/:id/statistics", statisticsCtrl.create);

router.get("/", teamsCtrl.index);
router.get("/new", teamsCtrl.new);
router.post("/", teamsCtrl.create);
router.get("/:id", teamsCtrl.show);
module.exports = router;
