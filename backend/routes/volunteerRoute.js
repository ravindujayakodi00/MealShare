const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

router.get('/volunteers', volunteerController.getVolunteers);
router.post('/volunteers', volunteerController.addVolunteer);
router.put('/volunteers/:id', volunteerController.updateVolunteer);
router.delete('/volunteers/:id', volunteerController.deleteVolunteer);

module.exports = router;
