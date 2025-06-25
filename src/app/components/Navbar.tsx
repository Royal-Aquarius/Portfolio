'use client';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed pt-3 pb-3 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#hero" className="text-white text-2xl font-bold tracking-wide">
          Minhaj Ahmed
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-white text-lg font-medium">
            <li><Link href="#about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link href="#skills" className="hover:text-blue-400 transition">Skills</Link></li>
            <li><Link href="#projects" className="hover:text-blue-400 transition">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
          {/* CV Button */}
          <a
            href="/Minhaj-CV.pdf"
            download
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-sm text-sm font-semibold transition shadow-md"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111111]/90 backdrop-blur-sm border-t border-white/10 px-6 py-4">
          <ul className="space-y-4 text-white text-lg font-medium">
            <li><Link href="#about" onClick={closeMenu} className="block hover:text-blue-400">About</Link></li>
            <li><Link href="#skills" onClick={closeMenu} className="block hover:text-blue-400">Skills</Link></li>
            <li><Link href="#projects" onClick={closeMenu} className="block hover:text-blue-400">Projects</Link></li>
            <li><Link href="#contact" onClick={closeMenu} className="block hover:text-blue-400">Contact</Link></li>
            <li>
              <a
                href="/Minhaj-CV.pdf"
                download
                onClick={closeMenu}
                className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold text-center transition shadow-md mt-2"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
