const mongoose = require('mongoose');
const redistributionSchema = new mongoose.Schema(
  {
    donor: {
      type: String,
      required: true,
      ref: 'Donor',
    },
    donation: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Donation',
    },
    volunteer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Volunteer',
    },
    request: {
      type: mongoose.Schema.Types.ObjectId,
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
