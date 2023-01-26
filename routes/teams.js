var express = require("express");
var router = express.Router();
const teamsCtrl = require("../controllers/teams");

router.get("/", teamsCtrl.index);
router.get("/new", teamsCtrl.new);
router.post("/", teamsCtrl.create);
router.get("/update/:id", teamsCtrl.updateform);
router.get("/:id", teamsCtrl.show);
router.delete("/:id", teamsCtrl.delete);
router.put("/:id", teamsCtrl.update);
module.exports = router;
