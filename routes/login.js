import fetch from "node-fetch";
import constants from "../constsants.js";
import express from "express";

const loginRouter = express.Router();

/* GET users listing. */
loginRouter.post("/", function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const body = { username, password };

  return fetch(`${constants["login-service"]}/api/v1/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data.token);
});

export default loginRouter;
