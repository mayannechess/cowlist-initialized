var mysql = require("mysql");
var db = require("../db.js");


module.exports = {
  cows: {
    get: function (useData) {
      db.queryAsync("SELECT * FROM cows")
        .then((cowList) => {
          useData(null, cowList);
        })
        .catch((err) => {
          useData(err);
        });
    },
    post: function (cowObj, useResponse) {
      db.queryAsync("INSERT INTO cows (name, description) VALUES (?, ?)", [cowObj.name, cowObj.description])
        .then((results) => {
          useResponse(null, cowObj);
        })
        .catch((err) => {
          useResponse(err);
        });
    }
  },
  name: {
    put: function (updateObj, useResponse) {
      console.log("put updateObj is", updateObj);
      db.queryAsync("UPDATE cows SET description = ? WHERE name = ?", [updateObj.description, updateObj.name])
        .then((results) => {
          console.log("put results:", results);
          useResponse(null, results);
        })
        .catch((err) => {
          useResponse(err);
        });
    }
  }
};
