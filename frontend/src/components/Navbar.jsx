import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 py-2 bg-white text-black shadow-lg shadow-gray-300 z-50">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={160} 
          height={55}
          className="w-32 sm:w-40 md:w-48"
          priority
        />
      </Link>

      {/* Sign In / Sign Up */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <Link 
          href="#" 
          className="text-sm sm:text-base text-gray-700 hover:text-black font-medium transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="#"
          className="px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-colors duration-200"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}