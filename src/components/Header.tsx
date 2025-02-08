'use client';
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-950/95 backdrop-blur-sm border-b text-white  border-gray-800' : 'bg-gray-200 text-black '
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-purple-800">BugBuster AI</div>
          <nav className="hidden md:flex gap-8">
            {['features', 'pricing', 'reviews', 'FAQ'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className=" font-bold hover:text-purple-700 transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </nav>
          <Link href="/login">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header
