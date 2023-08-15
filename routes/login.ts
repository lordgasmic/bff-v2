import fetch from "node-fetch";
import express from "express";
import constants from "../constsants.js";
import { SessionManager } from "../services/session-manager.js";
import { LoginResponseFull } from "../models/LoginResponseFull";

const loginRouter = express.Router();
const sessionManager = SessionManager.Instance;

/* GET users listing. */
loginRouter.post("/", async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const body = { username, password };

  const loginResponse = await fetch(
    `${constants["login-service"]}/api/v1/login`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json as LoginResponseFull;
    });

  let sessionInfo = sessionManager.handleLogin(loginResponse);

  return res.send({ sessionInfo });
});

export default loginRouter;
