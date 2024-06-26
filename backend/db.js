const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo-db:27017/PasswordDB", (err) => {
  if (!err) console.log("MongoDB Connection Successful!");
  else
    console.log(
      "Error in Database Connection: " + JSON.stringify(err, undefined, 2)
    );
});

module.exports = mongoose;
