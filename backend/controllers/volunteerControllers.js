const Volunteer = require('../models/volunteer');

// Create a new volunteer

const createVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.create(req.body);
    res.status(201).json(volunteer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get all volunteers
const getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await find();
    res.status(200).json(volunteers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get a volunteer by ID
const getVolunteerById = async (req, res) => {
  try {
    const volunteer = await findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    res.status(200).json(volunteer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Update a volunteer
const updateVolunteer = async (req, res) => {
  try {
    const volunteer = await findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    res.status(200).json(volunteer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Delete a volunteer
const deleteVolunteer = async (req, res) => {
  try {
    const volunteer = await findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    res.status(200).json({ message: 'Volunteer deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
module.export = {
  deleteVolunteer,
  updateVolunteer,
  getAllVolunteers,
  getVolunteerById,
  createVolunteer,
};
