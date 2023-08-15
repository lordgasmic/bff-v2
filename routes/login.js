import fetch from "node-fetch";
import constants from "../constsants.js";
import express from "express";

const loginRouter = express.Router();

/* GET users listing. */
loginRouter.post("/", async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const body = { username, password };

  const token = await fetch(`${constants["login-service"]}/api/v1/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });

  return res.send({ token });
});

export default loginRouter;
