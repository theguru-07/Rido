'use client';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Simulate fetching user profile (replace with real API later)
    const userData = {
      name: 'Malhar Prasad Ray',
      email: 'malhar.rido@example.com',
      phone: '+91 98765 43210',
      gender: 'Male',
      joined: 'March 2024',
      avatar: '/avatar.png', // place a default profile pic in /public folder
    };

    setProfile(userData);
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-lg">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md space-y-5">
        <h2 className="text-2xl font-bold text-blue-700 text-center">Your Profile</h2>

        <div className="flex justify-center">
          <img
            src={profile.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-blue-500"
          />
        </div>

        <div className="text-center space-y-1">
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="text-gray-600">{profile.email}</p>
          <p className="text-gray-600">{profile.phone}</p>
        </div>

        <div className="border-t pt-4 text-sm text-gray-500">
          <p>Gender: {profile.gender}</p>
          <p>Joined: {profile.joined}</p>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
