import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-lg">
        <p className="mb-2 sm:mb-0">Powered By Ishwari Graphics Mangrulpir.</p>
        <div className="flex space-x-4">
          <Link href="https://wa.me/918806112331" className="hover:underline">
  Design & Developed by ARP Digital Solutions.
</Link>


          {/* You can add more links here if needed */}
        </div>
      </div>
    </footer>
  );
}