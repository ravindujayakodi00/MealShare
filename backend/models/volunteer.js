const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },

  phoneNo: { type: String, required: true },
  skills: { type: String },
  availability: { type: String },
  interests: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
