"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Check if the link is a hash link
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Close mobile menu after clicking
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" onClick={handleScroll} className="flex items-center">
              <div className="h-8 w-8 rounded bg-teal-500 flex items-center justify-center">
                <Image src="/certs/logo.png" alt="Logo" width={32} height={32} />
              </div>
              <span className="ml-2 text-xl font-cormorant-garamond text-gray-800 hover:text-[#2855a0]">Lumi Mind Haven</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" onClick={handleScroll} className="text-lg text-gray-600 hover:text-[#2855a0] px-3 py-2 font-cormorant-garamond">
              Trang chủ
            </Link>
            <Link href="#Service" onClick={handleScroll} className="text-lg text-gray-600 hover:text-[#2855a0] px-3 py-2 font-cormorant-garamond">
              Dịch vụ
            </Link>
            <Link href="#Team" onClick={handleScroll} className="text-lg text-gray-600 hover:text-[#2855a0] px-3 py-2 font-cormorant-garamond">
              Đội ngũ
            </Link>
            <Link href="#about" onClick={handleScroll} className="text-lg text-gray-600 hover:text-[#2855a0] px-3 py-2 font-cormorant-garamond">
              Về chúng tôi
            </Link>
            <Link href="#contact" onClick={handleScroll} className="text-lg text-gray-600 hover:text-[#2855a0] px-3 py-2 font-cormorant-garamond">
              Liên hệ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="/home">
              <Button className="bg-[#3365b5] hover:bg-[#2855a0] text-white tracking-wide font-cormorant-garamond text-lg">
                Tin nhắn
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#2855a0] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#home" onClick={handleScroll} className="block px-3 py-2 text-gray-700 hover:text-[#2855a0] font-cormorant-garamond">
              Trang chủ
            </Link>
            <Link href="#Service" onClick={handleScroll} className="block px-3 py-2 text-gray-700 hover:text-[#2855a0] font-cormorant-garamond">
              Dịch vụ
            </Link>
            <Link href="#Team" onClick={handleScroll} className="block px-3 py-2 text-gray-700 hover:text-[#2855a0] font-cormorant-garamond">
              Đội ngũ
            </Link>
            <Link href="#about" onClick={handleScroll} className="block px-3 py-2 text-gray-700 hover:text-[#2855a0] font-cormorant-garamond">
              Về chúng tôi
            </Link>
            <Link href="#contact" onClick={handleScroll} className="block px-3 py-2 text-gray-700 hover:text-[#2855a0] font-cormorant-garamond">
              Liên hệ
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-[#3365b5] hover:bg-[#2855a0] text-white tracking-wide font-cormorant-garamond text-lg">
                Tin nhắn
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;