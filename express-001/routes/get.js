const express = require('express')
const router = express.Router()

const getController = require('../controllers/get')

router.get("/", getController.getHome)
router.get("/info", getController.getSysInfo)
router.get("/metrics/backend/violationPerApi", getController.getBackendViolationPerApi)
router.get("/metrics/edge/dosCountPerErrorAndAction", getController.getEdgeDosCountPerErrorAndAction)
router.get("/metrics/edge/dosHighCountPerAction", getController.getEdgeDosHighCountPerAction)
router.get("/metrics/edge/httpLimit", getController.getEdgeHttpLimit)
router.get("/metrics/edge/waf", getController.getEdgeWaf)
router.get("/metrics/edge/sid", getController.getEdgeSid)

module.exports = router ;
