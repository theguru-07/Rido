'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import connectToDatabase from '../../lib/mongodb';


export default function BookRide() {
  const router = useRouter();
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [fare, setFare] = useState(null);

  const estimateFare = () => {
    if (!pickup || !destination) {
      alert('Please enter both pickup and destination.');
      return;
    }

    // Mock fare estimation logic
    const baseFare = 30;
    const randomDistanceFare = Math.floor(Math.random() * 50) + 50;
    setFare(baseFare + randomDistanceFare);
  };

  const confirmRide = async () => {
    if (!fare) {
      alert('Please estimate the fare first.');
      return;
    }
    const res = await fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pickup, destination, fare }),
  });
  const data = await res.json();
  if (data.success) {
    router.push('/ride-status');
  } else {
    alert("Booking failed");
  }
};

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-5">
        <h2 className="text-2xl font-bold text-center text-blue-700">Book Your Ride</h2>

        {/* Pickup Input */}
        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md"
        />

        {/* Destination Input */}
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md"
        />

        {/* Estimate Fare Button */}
        <button
          onClick={estimateFare}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Estimate Fare
        </button>

        {/* Display Fare */}
        {fare && (
          <div className="text-center text-green-600 font-semibold text-lg">
            Estimated Fare: ₹{fare}
          </div>
        )}

        {/* Confirm Ride Button */}
        <button
          onClick={confirmRide}
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
}
