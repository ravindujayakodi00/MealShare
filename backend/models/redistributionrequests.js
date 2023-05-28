const mongoose = require('mongoose');
const redistributionSchema = new mongoose.Schema(
  {
    donor: {
      type: String,
      required: true,
      ref: 'Donor',
    },
    donation: {
      type: String,
      required: true,
      ref: 'Donation',
    },
    volunteer: {
      type: String,
      required: true,
      ref: 'Volunteer',
    },
    request: {
      type: String,
      required: true,
      ref: 'Request',
    },
    location: {
      type: String,
      required: true,
      ref: 'Location',
    },
    status: {
      type: String,
      required: true,
      default: 'Pending',
    },
  },
  { timestamps: true }
);

const Redistribution = mongoose.model('Redistribution', redistributionSchema);
module.exports = Redistribution;
