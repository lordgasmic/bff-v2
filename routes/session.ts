import express from "express";
import { SessionManager } from "../services/session-manager.js";
import { xLordgasmicToken } from "../constsants.js";

const sessionRouter = express.Router();
const sessionManager = SessionManager.Instance;

/* GET users listing. */
sessionRouter.get("/", async function (req, res, next) {
  let tokenHeader = req.get(xLordgasmicToken);
  if (!tokenHeader) {
    res.status(400).send("lgc token not found");
  }
  let login = sessionManager.getSessionInfo(tokenHeader);
  if (login) {
    return res.send({ username: login.username, roles: login.roles });
  }
  return res.status(401).send();
});

export default sessionRouter;
