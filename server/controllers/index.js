const models = require("../models");

module.exports = {
  cows: {
      get: function (req, res) {
        models.cows.get((err, cowList) => {
          if (err) {
            res.status(500);
            console.error(err);
            res.send("Error fetching cow data");
          } else {
            res.status(200);
            res.send(cowList);
          }
        });
      },
      post: function (req, res) {
        models.cows.post(req.body, (err, result) => {
          if (err) {
            res.status(500);
            console.error(err);
            res.send("Error posting cow");
          } else {
            res.status(201);
            res.send(result);
          }
        });
      }
  }
};
