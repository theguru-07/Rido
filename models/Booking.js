import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  pickup: String,
  destination: String,
  fare: Number,
  status: { type: String, default: 'pending' },
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
