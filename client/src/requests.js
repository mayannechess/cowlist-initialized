

var $ = require("jquery");

const requests = {

  fetchCows: (callback) => {
    $.ajax({
      method: "GET",
      url: "http://127.0.0.1:3000/api/cows",
      success: (data) => {
        callback(data);
      },
      error: (response) => {
        console.log("fetchCows request failed");
      }
    });
  },

  addCow: (cow) => {
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:3000/api/cows",
      contentType: "application/json",
      data: JSON.stringify(cow),
      success: (data) => {
        console.log("Post cow request successful");
      },
      error: (response) => {
        console.log("Post cow request failed");
      }
    });
  }

}

export default requests;