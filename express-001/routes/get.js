const express = require('express')
const router = express.Router()

const getController = require('../controllers/get')

router.get("/", getController.getHome)
router.get("/test", getController.getTest)

module.exports = router ;
