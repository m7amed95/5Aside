const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/teams", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
