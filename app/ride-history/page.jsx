'use client';
import { useEffect, useState } from 'react';

export default function RideHistory() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    // Simulated fetch — replace this with actual API/database call
    const sampleHistory = [
      {
        id: 'R001',
        date: '2025-07-01',
        pickup: 'Connaught Place, Delhi',
        destination: 'New Delhi Railway Station',
        fare: 120,
        status: 'Completed',
      },
      {
        id: 'R002',
        date: '2025-06-28',
        pickup: 'MG Road, Bengaluru',
        destination: 'Kempegowda Airport',
        fare: 480,
        status: 'Completed',
      },
      {
        id: 'R003',
        date: '2025-06-25',
        pickup: 'Banjara Hills, Hyderabad',
        destination: 'Gachibowli',
        fare: 160,
        status: 'Cancelled',
      },
    ];

    setRides(sampleHistory);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Ride History</h2>

        {rides.length === 0 ? (
          <p className="text-center text-gray-600">No rides found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200">
              <thead className="bg-blue-50 text-blue-800">
                <tr>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Pickup</th>
                  <th className="py-2 px-4 border-b">Destination</th>
                  <th className="py-2 px-4 border-b">Fare (₹)</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {rides.map((ride) => (
                  <tr key={ride.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{ride.date}</td>
                    <td className="py-2 px-4 border-b">{ride.pickup}</td>
                    <td className="py-2 px-4 border-b">{ride.destination}</td>
                    <td className="py-2 px-4 border-b">₹{ride.fare}</td>
                    <td
                      className={`py-2 px-4 border-b font-medium ${
                        ride.status === 'Completed' ? 'text-green-600' : 'text-red-500'
                      }`}
                    >
                      {ride.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
