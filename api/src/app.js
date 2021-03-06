const express = require("express");
const morgan = require("morgan");
const shortid = require("shortid");
const database = require("./configs/database");
const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./docs/api_doc');
const cors = require("cors");

require("dotenv").config();

const port = process.env.APP_PORT;
const app = express();
const authRouter = require("./routes/auth");
const shortLinksRouter = require("./routes/shortlinks");
const shortLinkRepo = require("./repositories/shortlinks");

app.use(cors());

// swagger OpenApi
if(process.env.NODE_ENV === "development"){
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
}

// middlerwares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/auth", authRouter);
app.use("/api/short-links", shortLinksRouter);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  if (!shortid.isValid(shortId)) {
    res.sendStatus(400);
    return;
  }

  const shortUrl = `${process.env.APP_URL}:${port}/${shortId}`;
  const shortlink = await shortLinkRepo.findShortLinkUrl(shortUrl);

  if (!shortlink) {
    res.sendStatus(404);
    return;
  }
  res.redirect(shortlink.original_url);
});

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
