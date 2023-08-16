import express from "express";
import fetch from "node-fetch";
import { services, xLordgasmicToken } from "../constsants.js";
import { SessionManager } from "../services/session-manager.js";

const wineRatingRouter = express.Router();
const sessionManager = SessionManager.Instance;

wineRatingRouter.get("/", async function (req, res, next) {
  let token = req.get(xLordgasmicToken);

  let wineId = req.query.wineId || "";
  let user = req.query.user || sessionManager.getSessionInfo(token).username;

  const response = await fetch(
    `${services["collection-service"]}/api/v1/wineRating?user=${user}&wineId=${wineId}`,
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

wineRatingRouter.put("/", async function (req, res, next) {
  const response = await fetch(
    `${services["collection-service"]}/api/v1/wineRating`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    },
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return res.send(response);
});

wineRatingRouter.put("/edit", async function (req, res, next) {
  const response = await fetch(
    `${services["collection-service"]}/api/v1/wineRating/edit`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    },
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return res.send(response);
});

wineRatingRouter.post("/", async function (req, res, next) {
  const response = await fetch(
    `${services["collection-service"]}/api/v1/wineRating`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    },
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return res.send(response);
});

export default wineRatingRouter;
