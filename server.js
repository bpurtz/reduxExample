const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  path = require("path");

//middleware for body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static resources
app.use(express.static("client/dist"));
// If you want to serve static resources from another route
// this will send /profile requests to the react app
//app.use("/profile", express.static("client/dist"));
//get the routes
const users = require("./routes/api/users");

// Connect to MongoDB
/*
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);
*/

// Use routes
app.use("/api/users", users);

const port = process.env.PORT || 8001;

// Serve static resources
app
  .get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/dist/index.html"), function(err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  })
  .listen(port);
