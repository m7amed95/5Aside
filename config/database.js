const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/5Aside", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
