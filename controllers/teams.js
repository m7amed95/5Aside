const Team = require("../models/team");

module.exports = {
  index,
  new: newTeam,
  create,
  show,
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

function create(req, res) {
  const team = new Team(req.body);
  team.save(function (err) {
    if (err) {
      console.log(err);
      return res.redirect("/teams/new");
    }
    console.log(team);
    res.redirect("/teams");
  });
}

function show(req, res) {
  Team.findById(req.params.id, function (err, team) {
    res.render("teams/show", { title: "team Detail", team });
  });
}
