const express = require('express')
const router = express.Router()

const postController = require('../controllers/post')

router.get("/", postController.getHome)
router.get("/test", postController.getTest)

module.exports = router ;
