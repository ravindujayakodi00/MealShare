const Volunteer = require('../models/volunteer');

// Create a new volunteer
exports.createVolunteer = async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get all volunteers
exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get a volunteer by ID
exports.getVolunteerById = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
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
exports.updateVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
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
exports.deleteVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    res.status(200).json({ message: 'Volunteer deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
