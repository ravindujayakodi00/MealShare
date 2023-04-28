const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerControllers');

router.get('/', volunteerController.getAllVolunteers);
router.post('/', volunteerController.createVolunteer);
router.put('/:id', volunteerController.updateVolunteer);
router.delete('/:id', volunteerController.deleteVolunteer);

module.exports = router;
