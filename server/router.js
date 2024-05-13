const router = require('express').Router()

router.post('/visitors',createVisitorController)
router.get('/visitors',getVisitors)
router.get('/events',getAllEvents)