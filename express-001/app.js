const express = require("express")
const getPosts = require("./routes/post")
const morgan = require("morgan")
const app = express();

// middleware, something in the middle, such as authn/authz etc.
const myMid = (req, res, next) => {
    console.log("Middleware applied")
    next()
}

app.use(morgan("dev"))
app.use(myMid)

// routes
app.use("/", getPosts)

const port = 3000
app.listen(port)

