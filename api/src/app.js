const express = require("express");
const morgan = require("morgan");
const app = express()
const authRouter = require("./routes/auth");

require("dotenv").config();

const port = process.env.APP_PORT

// middlerwares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use("/api/auth", authRouter);

app.listen(port, () => console.log(`Server is up and running on port ${port}`));