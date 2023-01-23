const Team = require("../models/team");

module.exports = {
  index,
  new: newTeam,
};

function index(req, res) {
  Team.find({}, function (err, teams) {
    console.log(teams);
    res.render("teams/index", { title: "All Teams", teams });
  });
}

function newTeam(req, res) {
  res.render("teams/new", { title: "Create Team" });
}
