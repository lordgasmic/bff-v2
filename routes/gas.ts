import fetch from "node-fetch";
import express from "express";
import { services } from "../constsants.js";

const gasRouter = express.Router();

gasRouter.put("/", async function (req, res, next) {
  const response = await fetch(`${services["collection-service"]}/api/v1/gas`, {
    method: "PUT",
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      return json;
    });

  return res.send(response);
});

gasRouter.get("/", async function (req, res, next) {
  const response = await fetch(
    `${services["collection-service"]}/api/v1/gas?vehicle=${req.query.vehicle}`,
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

export default gasRouter;
