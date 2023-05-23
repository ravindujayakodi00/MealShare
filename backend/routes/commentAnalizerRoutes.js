const express = require('express');
const router = express.Router();
const commentAnalyzerController = require('../controllers/CommentAnalizerController');

// API endpoint to get percentage of positive comments for an event
router.get('/:eventId', commentAnalyzerController.getPercentageOfPositiveComments);

module.exports = router;