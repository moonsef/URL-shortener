const express = require("express");
const morgan = require("morgan");
const database = require("./configs/database");

require("dotenv").config();

const port = process.env.APP_PORT;
const app = express();
const authRouter = require("./routes/auth");

// middlerwares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/auth", authRouter);

app.listen(port, () => console.log(`Server is up and running on port ${port}`));

const startGracefulShutdown = () => {
  console.log('Starting shutdown of express...');
  database.end();
  process.exit(1);
}

process.on('SIGTERM', startGracefulShutdown);
process.on('SIGINT', startGracefulShutdown);