import express from "express";
import fetch from "node-fetch";
import { services } from "../constsants.js";

const wineriesRouter = express.Router();

wineriesRouter.get("/", async function (req, res, next) {
  const response = await fetch(
    `${services["collection-service"]}/api/v1/wineries`,
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

wineriesRouter.get("/:id", async function (req, res, next) {
  const response = await fetch(
    `${services["collection-service"]}/api/v1/wineries/${req.params.id}`,
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

wineriesRouter.put("/", async function (req, res, next) {
  const response = await fetch(
    `${services["collection-service"]}/api/v1/wineries`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: req.body.id,
        name: req.body.name,
        location: req.body.location,
      }),
    },
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return res.send(response);
});

export default wineriesRouter;
