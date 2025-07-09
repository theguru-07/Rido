'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
const router = useRouter();

return (
<main className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#003f6b] to-[#0077b6] text-white px-4 py-12 font-sans">
  {/* Hero Section */}
  <section className="max-w-7xl mx-auto text-center space-y-6">
	<h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl text-[#90e0ef]">
	  Welcome to Rido
	</h1>
	<p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
	  Your fast, smart, and secure ride-booking companion. Get where you need to be — with confidence.
	</p>
	<div className="flex justify-center gap-6 mt-6">
	  <button
		onClick={() => router.push('/book')}
		className="bg-[#00b4d8] hover:bg-[#48cae4] text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
	  >
		Book a Ride
	  </button>
	  <button
		onClick={() => router.push('/login')}
		className="border border-[#00b4d8] hover:bg-[#023e8a] text-blue-100 px-6 py-3 rounded-lg font-medium transition"
	  >
		Rider Login
	  </button>
	</div>
  </section>
</main>
);
}
