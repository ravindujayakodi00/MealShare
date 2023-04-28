const mongoose = require('mongoose');
const redistributionSchema = new mongoose.Schema(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
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
  },
  { timestamps: true }
);

const Redistribution = mongoose.model('Redistribution', redistributionSchema);
module.exports = Redistribution;
