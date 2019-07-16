const express = require('express')
const router = express.Router()

const getController = require('../controllers/post')

router.post("/testPost", getController.testPost)

module.exports = router ;
