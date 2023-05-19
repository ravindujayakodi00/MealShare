const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  text: { type: String, required: true },
  event: { type: Schema.Types.ObjectId, ref: 'Event' },
  sentiment: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);