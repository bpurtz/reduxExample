const express = require("express");
const router = express.Router();

// @route       POST api/users/register
// @desc        Register User
// @access      Public
router.post("/login", (req, res) => {
  res.status(200).send(true);
});

//need to export for the server.js file to pick up
module.exports = router;
