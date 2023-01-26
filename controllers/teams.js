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
    req.params.id,
    {
      Kit: req.body.Kit,
      GK: req.body.GK,
      DF: req.body.DF,
      MF: req.body.MF,
      WG: req.body.WG,
      ST: req.body.ST,
    },
    function (err, team) {
      if (err) console.log(err);
      res.redirect("/teams");
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
