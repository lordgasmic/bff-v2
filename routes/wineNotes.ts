import express from "express";
import fetch from "node-fetch";
import { services, xLordgasmicToken } from "../constsants.js";

const wineNotesRouter = express.Router();

wineNotesRouter.get("/", async function (req, res, next) {
  let wineId = req.query.wineId || "";
  let wineryId = req.query.wineryId || "";

  let token = req.get(xLordgasmicToken);

  const response = await fetch(
    `${services["collection-service"]}/api/v1/wineNotes?wineId=${wineId}&wineryId=${wineryId}`,
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

wineNotesRouter.put("/", async function (req, res, next) {
  const response = await fetch(
    `${services["collection-service"]}/api/v1/wineNotes`,
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

export default wineNotesRouter;
