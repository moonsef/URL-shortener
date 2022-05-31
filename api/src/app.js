const express = require("express");
const morgan = require("morgan");
const app = express()

require("dotenv").config();

const port = process.env.APP_PORT

app.use(express.json())
app.use(morgan('dev'))

app.get("/", (req,res) => {
    res.end("HOOLA")
});


app.listen(port, () => console.log(`Server is up and running on port ${port}`));