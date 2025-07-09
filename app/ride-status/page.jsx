'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RideStatus() {
  const router = useRouter();
  const [rideInfo, setRideInfo] = useState(null);

  useEffect(() => {
    // Simulate fetching ride status (replace this with real API call)
    const timer = setTimeout(() => {
      setRideInfo({
        driver: 'Rahul Sharma',
        vehicle: 'Maruti Swift - DL 8C 1234',
        status: 'Driver is arriving',
        eta: '3 mins',
        driverImage: '/driver-avatar.png', // optional
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const cancelRide = () => {
    if (confirm('Are you sure you want to cancel the ride?')) {
      router.push('/');
    }
  };

  if (!rideInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-lg">
        Checking your ride status...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      <div className="bg-white w-full max-w-md rounded-xl shadow p-6 space-y-4">
        <h2 className="text-2xl font-bold text-blue-700 text-center">Ride Status</h2>

        <div className="flex items-center gap-4">
          <img
            src={rideInfo.driverImage || '/avatar.png'}
            alt="Driver"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h3 className="text-lg font-semibold">{rideInfo.driver}</h3>
            <p className="text-gray-600">{rideInfo.vehicle}</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-blue-800 font-medium text-center">
          {rideInfo.status} — <span className="font-bold">{rideInfo.eta}</span>
        </div>

        <button onClick={cancelRide} className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">
          Cancel Ride
        </button>
      </div>
    </div>
  );
}
