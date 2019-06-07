const getHome = (req, res) => {
    res.send("Home")
}

const getTest = (req, res) => {
    res.send("Test")
}

module.exports = {
    getHome,
    getTest
}
