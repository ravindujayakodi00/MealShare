const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  location: { type: String },
  photos: [{ type: String }],
  status: { type: String,default: 'Comming Soon' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  success: { type: Boolean },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);