import React from 'react';
import { useNavigate } from 'react-router-dom';
import ridoLogo from '../../assets/rido-logo.png'; // Adjust path based on your logo

const Home = () => {
  const navigate = useNavigate();

  const handleBookRide = () => {
    navigate('/book');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Logo */}
      <img src={ridoLogo} alt="Rido Logo" className="w-32 h-auto mb-6" />

      {/* Welcome Text */}
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome to Rido</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Book safe and affordable rides anytime, anywhere.
      </p>

      {/* Book Ride Button */}
      <button
        onClick={handleBookRide}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-md"
      >
        Book a Ride
      </button>
    </div>
  );
};

export default Home;
