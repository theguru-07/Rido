'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Book Ride', href: '/book' },
  { label: 'Ride Status', href: '/ride-status' },
  { label: 'History', href: '/ride-history' },
  { label: 'Profile', href: '/profile' },
  { label: 'Login', href: '/login' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
          Rido
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium hover:text-blue-600 transition ${
                pathname === item.href ? 'text-blue-700 font-semibold' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger (Optional for enhancement) */}
        {/* <button className="md:hidden">☰</button> */}
      </nav>
    </header>
  );
};

export default Navbar;
