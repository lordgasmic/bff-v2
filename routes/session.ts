import express from "express";

const sessionRouter = express.Router();

const SESSION_MAP = new Map<string, any>();

/* GET users listing. */
sessionRouter.get("/", async function (req, res, next) {
  return res.send();
});

export default sessionRouter;
