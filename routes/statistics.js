var express = require("express");
var router = express.Router();

const statisticsCtrl = require("../controllers/statistics");

router.post("/teams/:id/statistics", statisticsCtrl.create);

module.exports = router;
