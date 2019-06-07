const fs = require('fs')
// node built-in module

const errHandler = err => console.log(err)
const dataHandler = data => console.log(data)


const fileName = "/tmp/1"

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(data.toString())
})

fs.watch(fileName, () => console.log("file changed"))

