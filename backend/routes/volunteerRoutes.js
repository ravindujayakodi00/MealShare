const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerControllers');

//Get all the volunteers
router.get('/', volunteerController.getAllVolunteers);

//Get a volunteer by ID
router.get('/:id', volunteerController.getVolunteerById);

//Create a new volunteer
router.post('/', volunteerController.createVolunteer);

//Update a volunteer
router.put('/:id', volunteerController.updateVolunteer);

//Delete a volunteer
router.delete('/:id', volunteerController.deleteVolunteer);
module.exports = router;
