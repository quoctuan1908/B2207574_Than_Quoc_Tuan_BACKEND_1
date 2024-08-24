const express = require("express");
const cors = require("cors");
const contactRouter = require("./app/routes/contact.routes");
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRouter)
app.get("/", (req,res) => {
    res.json({message: "Welcome to contact book application. "});
})

module.exports = app;