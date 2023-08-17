import fetch from "node-fetch";
import express from "express";
import { services } from "../constsants.js";

const memeRouter = express.Router();

/* GET users listing. */
memeRouter.get("/tag/:tag", async function (req, res, next) {
  const memeData = await fetch(
    `${services["meme-service"]}/api/v1/memes/tag/${req.params.tag}`,
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

  return res.send(memeData);
});

export default memeRouter;
