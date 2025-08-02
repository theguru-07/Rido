import connectToDatabase from '@/lib/mongodb';
import Booking from '../../../models/Booking'; 

export async function POST(req) {
  await connectToDatabase();
  const body = await req.json();

  const newBooking = await Booking.create(body);

  return Response.json({ success: true, data: newBooking });
}

export async function GET() {
  await connectToDatabase();
  const bookings = await Booking.find();
  return Response.json(bookings);
}
