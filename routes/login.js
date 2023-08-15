import fetch from "node-fetch";
import constants from "../constsants";

const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  return fetch(constants["login-client"], {
    method: "POST",
    body: req.body,
  })
    .then((res) => res.json())
    .then((data) => data.token);
});

module.exports = router;
