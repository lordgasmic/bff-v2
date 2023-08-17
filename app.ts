import createError from "http-errors";
import express from "express";
import cors from "cors";
import loginRouter from "./routes/login.js";
import sessionRouter from "./routes/session.js";
import memeRouter from "./routes/memes.js";
import wineriesRouter from "./routes/wineries.js";
import winesRouter from "./routes/wines.js";
import wineNotesRouter from "./routes/wineNotes.js";
import wineRatingRouter from "./routes/wineRating.js";
import gasRouter from "./routes/gas.js";
import usersRouter from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
  }),
);

app.use("/api/v1/login", loginRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/session", sessionRouter);
app.use("/api/v1/memes", memeRouter);
app.use("/api/v1/wineries", wineriesRouter);
app.use("/api/v1/wines", winesRouter);
app.use("/api/v1/wineNotes", wineNotesRouter);
app.use("/api/v1/wineRating", wineRatingRouter);
app.use("/api/v1/gas", gasRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use((req, res, next) => {
  console.log("erry time");
  next();
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

app.use(app.router);

export default app;
