const Redistribution = require('../models/redistributionrequests');

//Get all the redistribution requests
const getAllRedistributionRequests = async (req, res) => {
  try {
    const redistributionRequests = await Redistribution.find();
    res.status(200).json(redistributionRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

//Get a redistribution request by ID
const getRedistributionRequestById = async (req, res) => {
  try {
    const redistributionRequest = await Redistribution.findById(req.params.id);
    if (!redistributionRequest) {
      return res
        .status(404)
        .json({ error: 'Redistribution request not found' });
    }
    res.status(200).json(redistributionRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

//Create a new redistribution request
const createRedistributionRequest = async (req, res) => {
  const redistribution = new Redistribution({
    donor: req.body.donor,
    donation: req.body.donation,
    volunteer: req.body.volunteer,
    request: req.body.request,
    location: req.body.location,
    status: req.body.status,
  });
  try {
    const redistributionRequest = await Redistribution.create(req.body);
    res.status(201).json(redistributionRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

//Update a redistribution request
const updateRedistributionRequest = async (req, res) => {
  try {
    const redistribution = (redistribution = await Redistribution.findById(
      req.params.id
    ));
    if (!redistribution) {
      return res
        .status(404)
        .json({ error: 'Redistribution request not found' });
    }
    if (req.body.donor) {
      redistribution.donor = req.body.donor;
    }
    if (req.body.donation) {
      redistribution.donation = req.body.donation;
    }
    if (req.body.volunteer) {
      redistribution.volunteer = req.body.volunteer;
    }
    if (req.body.request) {
      redistribution.request = req.body.request;
    }
    if (req.body.location) {
      redistribution.location = req.body.location;
    }
    if (req.body.status) {
      redistribution.status = req.body.status;
    }

    const updateRedistributionRequest = await redistribution.save();
    res.json(updateRedistributionRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delete a redistribution request
const deleteRedistributionRequest = async (req, res) => {
  try {
    const redistributionRequest = await Redistribution.findByIdAndDelete(
      req.params.id
    );
    if (!redistributionRequest) {
      return res
        .status(404)
        .json({ error: 'Redistribution request not found' });
    }
    res.status(200).json(redistributionRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  getAllRedistributionRequests,
  getRedistributionRequestById,
  createRedistributionRequest,
  updateRedistributionRequest,
  deleteRedistributionRequest,
};
