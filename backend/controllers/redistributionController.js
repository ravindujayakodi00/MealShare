const RedistributionRequests = require('../models/redistributionrequests');
//Create  new  redistribution request
const createRedistributionRequest = async (req, res) => {
  try {
    const redistributionRequest = await RedistributionRequests.create(req.body);
    res.status(201).json({ redistributionRequest });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get all redistribution requests
const getAllRedistributionRequests = async (req, res) => {
  try {
    const redistributionRequests = await RedistributionRequests.find();
    res.status(200).json({ redistributionRequests });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get redistribution request by id
const geteRedistributionrequestById =async(req,res)=>{
    try{
        const redistributionRequest= await redistributionRequest.findById(req.params.id);
        if(!redistributionRequest){
            return res.status(404).json({error:'Redistribution request not found'});
        }
    }
}


module.exports={
    createRedistributionRequest,getAllRedistributionRequests
}