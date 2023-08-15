import createError from "http-errors";
import express from "express";
import cors from "cors";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import loginRouter from "./routes/login.js";
import sessionRouter from "./routes/session.js";
import memeRouter from "./routes/memes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
  }),
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/session", sessionRouter);
app.use("/api/v1/memes", memeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
