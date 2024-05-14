const router = require('express').Router()
const VisitorController = require('./Controllers/VisitorController')
const EventController = require('./Controllers/EventController')

router.post('/visitors',VisitorController.createVisitor)
router.get('/visitors',VisitorController.getVisitors)
router.get('/events',EventController.getAllEvents)

module.exports = router