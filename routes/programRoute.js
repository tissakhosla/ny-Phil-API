const express = require('express')
const router = express()
const programController = require('../controllers/programController')
// const innerController = require('../controllers/programController')


router.get("/", programController.index); //r
router.get("/orchestra/:orchestra", programController.lookUpByOrchestra) //r1 
router.get("/season/:season", programController.lookUpBySeason) //r2
router.get("/event/:eventType", programController.lookUpByEvent) //r3
router.get("/location/:location", programController.lookUpByLocation) //r4
router.get("/venue/:venue", programController.lookUpByVenue) //r
router.get("/event/:eventType", programController.lookUpByEvent) //r
router.get("/composer/:composer", programController.lookUpByComposer) //r
router.get("/id/:_id", programController.lookUpById) //r

router.post("/", programController.new) //c
router.put("/id/:_id", programController.editById) //u
router.delete("/id/:_id", programController.deleteById) //d

module.exports = router