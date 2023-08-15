import express from "express";
import { SessionManager } from "../services/session-manager.js";

const sessionRouter = express.Router();
const sessionManager = SessionManager.Instance;

/* GET users listing. */
sessionRouter.get("/", async function (req, res, next) {
  let tokenHeader = req.get("X-Lordgasmic-Token");
  if (!tokenHeader) {
    res.send(401, "lgc token not found");
  }
  let login = sessionManager.handleLogin(tokenHeader);
  return res.send();
});

export default sessionRouter;
