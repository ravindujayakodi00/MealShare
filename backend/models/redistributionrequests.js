import mongoose from 'mongoose';
const redistributionSchema = new mongoose.Schema(
  {
    requester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    foodType: { type: String, required: true },
    quantity: { type: Number, required: true },
    deliveryLocation: { type: String, required: true },
    deliveryTime: { type: Date, required: true },
    status: {
      type: String,
      enum: ['pending', 'matched', 'completed'],
      default: 'pending',
    },
    matchedDonation: { type: mongoose.Schema.Types.ObjectId, ref: 'Donation' },
  },
  { timestamps: true }
);
export default mongoose.model('RedistributionRequests', redistributionSchema);
