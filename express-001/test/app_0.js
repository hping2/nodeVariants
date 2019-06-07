const { sum } = require("./helpers")  // use object destructing
const http = require('http');

//const helpers = require("./helpers")
//const total = helpers.sum(10,20)

const total = sum(10,20)
console.log(total)

const server = http.createServer((req, res) => {
    res.end("hello world from node")
})

server.listen(3000)
