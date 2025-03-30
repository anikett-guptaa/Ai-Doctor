import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-white text-black shadow-lg shadow-gray-300 z-50">
    
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={160} height={55} />
      </Link>

      {/* Sign In / Sign Up */}
      <div className="flex items-center gap-6">
        <Link href="#" className="text-gray-700 hover:text-black font-medium">
          Sign In
        </Link>
        <Link
          href="#"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
