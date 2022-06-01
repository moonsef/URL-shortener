const express = require("express");
const morgan = require("morgan");
const database = require("./configs/database");

require("dotenv").config();

const port = process.env.APP_PORT;
const app = express();
const authRouter = require("./routes/auth");
const shortLinksRouter = require("./routes/shortlinks");

// middlerwares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/auth", authRouter);
app.use("/api/short-links", shortLinksRouter);

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
    return;
  }
  res.status(500).json({ message: "internal_server_error" });
});

const startGracefulShutdown = () => {
  console.log("Starting graceful shutdown...");

  server.close();
  database.end();

  process.exit(1);
};

app
  .listen(port, () => console.log(`Server is up and running on port ${port}`))
  .on("SIGTERM", startGracefulShutdown)
  .on("SIGINT", startGracefulShutdown);


