const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController');

router.route('/').get(eventController.getEvents);
router.route('/:id').get(eventController.getEventById);
router.route('/').post(eventController.addEvent);
router.route('/:id').patch( eventController.updateEvent);
router.route('/:id').delete (eventController.deleteEvent);

module.exports = router;
