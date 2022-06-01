const express = require("express");
const morgan = require("morgan");
const database = require("./configs/database");

require("dotenv").config();

const port = process.env.APP_PORT;

database
  .connect()
  .then(() => {
    const app = express();
    const authRouter = require("./routes/auth");

    // middlerwares
    app.use(express.json());
    app.use(morgan("dev"));

    // routes
    app.use("/api/auth", authRouter);

    app.listen(port, () =>
      console.log(`Server is up and running on port ${port}`)
    );
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
