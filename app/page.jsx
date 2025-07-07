'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-800">Welcome to Rido</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your smart and simple ride-booking app. Get to your destination quickly and safely with Rido.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push('/book')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
          >
            Book a Ride
          </button>
          <button
            onClick={() => router.push('/login')}
            className="border border-blue-600 text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg font-medium transition"
          >
            Rider Login
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src="/car-icon.png" alt="Fast Rides" className="mx-auto w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Rides</h3>
          <p className="text-gray-600">Reach your destination with verified drivers in minutes.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src="/wallet-icon.png" alt="Affordable" className="mx-auto w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Affordable</h3>
          <p className="text-gray-600">Transparent fares with no surge pricing. Pay your way.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src="/support-icon.png" alt="24x7 Support" className="mx-auto w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">24x7 Support</h3>
          <p className="text-gray-600">Got a question? Our team is here to help you anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Rido. All rights reserved.
      </footer>
    </main>
  );
}
