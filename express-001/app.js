const express = require("express")
const router = require("./routes/get")
const routerPost = require("./routes/post")
const bodyParser = require('body-parser')
const morgan = require("morgan")
const app = express();

// morgan middleware for logging
app.use(morgan(function (tokens, req, res) {
  return [
    "[Edge Ser:]",
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}))

// middleware, something in the middle, such as authn/authz etc.
const myMid = (req, res, next) => {
    // console.log("Middleware applied")
    next()
}
app.use(myMid)

// routes
app.use("/", router)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/", routerPost)

const port = 18080
console.log("The server listens at port 18080, supported metric endpoints: ")
console.log("\thttp://your_box_ip:18080/globalInfo \n\thttp://your_box_ip:18080/metrics/edge/httpLimit \n\thttp://your_box_ip:18080/metrics/edge/waf \n\thttp://your_box_ip:18080/metrics/edge/sid \n\thttp://your_box_ip:18080/metrics/edge/dosHighCountPerAction \n\thttp://your_box_ip:18080/metrics/edge/dosCountPerErrorAndAction \n\thttp://your_box_ip:18080/metrics/backend/violationPerApi \n\thttp://your_box_ip:18080/metrics/backend/numReqAndRspTimePerApi \n\thttp://your_box_ip:18080/metrics/backend/httpStatusPerApi")
app.listen(port)

