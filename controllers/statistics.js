const Team = require("../models/team");

module.exports = {
  create,
};

function create(req, res) {
  Team.findById(req.params.id, function (err, team) {
    team.statistics.push(req.body);
    team.save(function (err) {
      res.redirect(`/teams/${team._id}`);
    });
  });
}
