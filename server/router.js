const router = require('express').Router();
const VisitorController = require('./Controllers/VisitorController');
const EventController = require('./Controllers/EventController');

router.post('/visitors/:eventId', VisitorController.addVisitorToEvent);
router.get('/visitors/:eventId', VisitorController.getVisitors);
router.get('/events', EventController.getAllEvents);

module.exports = router;
