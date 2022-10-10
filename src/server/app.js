(function () {
  "use strict";
  let express = require("express");
  let app = express();
  app.use(express.static("assets"));

  app.get("/", function (req, res) {
    res.send("Welcome to electron react node starter");
  });
  let server = app.listen(3000, function () {
    console.log("Express server listening on port " + server.address().port);
  });
  module.exports = app;
})();
