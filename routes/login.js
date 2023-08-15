import fetch from "node-fetch";
import constants from "../constsants.js";
import express from "express";

const loginRouter = express.Router();

/* GET users listing. */
loginRouter.post("/", function (req, res, next) {
  return fetch(constants["login-client"], {
    method: "POST",
    body: req.body,
  })
    .then((res) => res.json())
    .then((data) => data.token);
});

export default loginRouter;
