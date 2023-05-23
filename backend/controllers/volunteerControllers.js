const Volunteer = require('../models/volunteer');

//get all volunteers
const getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
//get a volunteer by id
const getVolunteerById = async (req, res) => {
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
//create a new volunteer
const createVolunteer = async (req, res) => {
  const volunteer = new Volunteer({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    availability: req.body.availability,
  });
  try {
    const newVolunteer = await Volunteer.create(req.body);
    res.status(201).json(newVolunteer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

//update a volunteer
const updateVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    if (req.body.fname) {
      volunteer.fname = req.body.fname;
    }
    if (req.body.lname) {
      volunteer.lname = req.body.lname;
    }
    if (req.body.email) {
      volunteer.email = req.body.email;
    }
    if (req.body.phoneNo) {
      volunteer.phoneNo = req.body.phoneNo;
    }

    if (req.body.availability) {
      volunteer.availability = req.body.availability;
    }

    volunteer.updatedAt = Date.now();
    await volunteer.save();
    res.status(200).json(volunteer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

//delete a volunteer
const deleteVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    await volunteer.remove();
    res.status(200).json({ message: 'Volunteer deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
module.exports = {
  deleteVolunteer,
  updateVolunteer,
  createVolunteer,
  getVolunteerById,
  getAllVolunteers,
};
