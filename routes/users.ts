import fetch from "node-fetch";
import express from "express";
import { services } from "../constsants.js";

const usersRouter = express.Router();

usersRouter.get("/", async function (req, res, next) {
  const response = await fetch(
    `${services["login-service"]}/api/v1/users?role=${req.query.role}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });

  return res.send(response);
});

export default usersRouter;
