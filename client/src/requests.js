

var $ = require("jquery");

const requests = {

  fetchCows: (callback) => {
    $.ajax({
      method: "GET",
      url: "http://127.0.0.1:3000/api/cows",
      success: (data) => {
        callback(null, data);
      },
      error: (response) => {
        console.log("fetchCows request failed");
        callback(response);
      }
    });
  },

  addCow: (cow, callback) => {
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:3000/api/cows",
      contentType: "application/json",
      data: JSON.stringify(cow),
      success: (data) => {
        console.log("Post cow request successful");
        callback(null, data);
      },
      error: (response) => {
        console.log("Post cow request failed");
        callback(response);
      }
    });
  },

  updateCow: (name, description, callback) => {
    if (name) {
      $.ajax({
        method: "PUT",
        url: `http://127.0.0.1:3000/api/cows/${name}`,
        contentType: "application/json",
        data: JSON.stringify({
          description: description
        }),
        success: (data) => {
          console.log("Update cow request successful");
          const updatedCow = {
            name: name,
            description: description
          };
          callback(null, updatedCow);
        },
        error: (response) => {
          callback(response);
        }
      });
    }
  }

}

export default requests;