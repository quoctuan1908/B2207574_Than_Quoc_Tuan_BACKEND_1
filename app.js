const express = require("express");
const cors = require("cors");
const contactRouter = require("./app/routes/contact.routes");
const ApiError = require("./app/api-error")

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRouter)

app.use((req,res,next)=> {
    return next(new ApiError(404, "resource not found"));
})

app.use((err,req,res,next)=> {
    return res.status(err.statusCode || 500).json({
        message: err.message|| "Internal Server Error"
    })
})

app.get("/", (req,res, next) => {
    res.json({message: "Welcome to contact book application. "});
})

module.exports = app;