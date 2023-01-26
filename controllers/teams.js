const Team = require("../models/team");

module.exports = {
  index,
  new: newTeam,
  create,
  show,
  delete: deleteTeam,
  update: updateTeam,
  updateform,
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
    console.log(team);
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
  Team.findByIdAndUpdate(
    {
      _id: req.params.id,
      userRecommending: req.user._id,
    },
    req.body,
    { new: true },
    function (err, team) {
      if (err || !team) return res.redirect("/teams");
      res.redirect(`/teams/${team._id}`);
    }
  );
}

function updateform(req, res) {
  const id = req.params.id;
  Team.findById(id, function (err, team) {
    if (err) console.log(err);
    res.render("teams/update", { title: "Update Team", team });
  });
}
