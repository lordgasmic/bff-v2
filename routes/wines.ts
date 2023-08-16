import express from "express";
import fetch from "node-fetch";
import { services } from "../constsants.js";

const winesRouter = express.Router();

winesRouter.get("/", async function (req, res, next) {
  let wineId = req.query.wineId || "";
  let wineryId = req.query.wineryId || "";

  const response = await fetch(
    `${services["collection-service"]}/api/v1/wines?wineId=${wineId}&wineryId=${wineryId}`,
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

winesRouter.put("/", async function (req, res, next) {
  const response = await fetch(
    `${services["collection-service"]}/api/v1/wines`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wineryId: req.body.wineryId,
        name: req.body.name,
        style: req.body.style,
      }),
    },
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return res.send(response);
});

export default winesRouter;
