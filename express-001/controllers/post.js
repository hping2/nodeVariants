const testPost = (req, res) => {
    console.log(req.body)
    res.send("From testPost")
}

module.exports = {
    testPost
}
