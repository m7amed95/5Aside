const Team = require("../models/team");

module.exports = {
  index,
  new: newTeam,
  create,
  show,
  delete: deleteTeam,
  update: updateTeam,
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

function deleteTeam(req, res) {
  Team.deleteOne({ _id: req.params.id }, function (err, player) {
    if (err) console.log(err);
  });
  res.redirect("/teams");
}

function updateTeam(req, res) {
  const id = req.params.id;
  const updateData = req.body;
  Team.findByIdAndUpdate(
    id,
    updateData,
    { new: true },
    function (err, updateTeam) {
      if (err) console.log(err);
    }
  );
  res.redirect("/teams");
}
