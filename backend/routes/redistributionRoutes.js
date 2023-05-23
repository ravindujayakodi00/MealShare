const express = require('express');
const router = express.Router();
const redistributionController = require('../controllers/redistributionController');

//Get all the redistribution requests
router.get('/', redistributionController.getAllRedistributionRequests);

//Get a redistribution request by ID
router.get('/:id', redistributionController.getRedistributionRequestById);

//Create a new redistribution request
router.post('/', redistributionController.createRedistributionRequest);

//Update a redistribution request
router.put('/:id', redistributionController.updateRedistributionRequest);

//Delete a redistribution request
router.delete('/:id', redistributionController.deleteRedistributionRequest);

module.exports = router;
