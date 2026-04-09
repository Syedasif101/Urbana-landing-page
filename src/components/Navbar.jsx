import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { HiSearch } from 'react-icons/hi';

const navLinks = [
  'All Products',
  'Desi Ghee',
  'Cold Pressed Oils',
  'Other Collections',
  'Blogs',
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="bg-green-700 text-white text-xs text-center py-2 tracking-wide px-4">
        🌿 10% off on your first order — Use code <strong>SUPERNEW</strong>{' '}
        &nbsp;·&nbsp; Free shipping on all orders
      </div>

      {/* Navbar */}
      <nav className="bg-white/50 backdrop-blur-md sticky top-0 z-50 ">
        <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-3xl font-bold tracking-tight font-serif">
            <span className="text-green-800">Urba</span>
            <span className="text-gray-900">na</span>
          </h1>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 text-sm  font-medium list-none">
            {navLinks.map((link) => (
              <li
                key={link}
                className="hover:text-green-700 cursor-pointer transition-colors duration-200"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-green-600 hover:text-green-700 transition-colors duration-200 cursor-pointer">
              <HiOutlineShoppingBag size={18} />
            </button>
            <button className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-green-600 hover:text-green-700 transition-colors duration-200 cursor-pointer">
              <HiSearch size={18} />
            </button>
            <button className="bg-green-700 text-white text-sm px-5 py-2 rounded-full hover:bg-green-800 transition-colors duration-200 cursor-pointer">
              Shop Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoCloseOutline size={24} />
            ) : (
              <IoMenuOutline size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-stone-100 px-6 py-5 flex flex-col gap-4 bg-[#faf8f3]">
            {navLinks.map((link) => (
              <span
                key={link}
                className="text-sm text-stone-600 font-medium cursor-pointer hover:text-green-700transition-colors duration-200"
              >
                {link}
              </span>
            ))}
            <button className="mt-2 bg-green-700 text-white text-sm px-5 py-2.5 rounded-full w-full hover:bg-green-800 transition-colors duration-200">
              Shop Now
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
