"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="glass-effect fixed w-full z-50 animate-fade-in">
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-5 group">
          <div className="relative w-16 h-16 border border-[#D4B98C] flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-[2px] before:border before:border-[#D4B98C]/20">
            <span className="text-2xl font-extralight tracking-wider text-[#D4B98C] relative z-10 logo-text">BR</span>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4B98C] to-[#A38E6A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            <span className="absolute text-2xl font-extralight tracking-wider text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 z-20 logo-text">BR</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extralight tracking-wider text-white logo-text">BR</span>
            <span className="text-base font-light tracking-[0.2em] text-[#D4B98C] logo-text">AGENCY</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#inicio" className="nav-link heading-text">Início</Link>
          <Link href="/#servicos" className="nav-link heading-text">Serviços</Link>
          <Link href="/#portfolio" className="nav-link heading-text">Portfólio</Link>
          <Link href="/#sobre" className="nav-link heading-text">Sobre</Link>
          <Link href="/contato" className="nav-link heading-text">Contato</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[var(--color-text-primary)] hover:text-[#D4B98C] transition-colors duration-300 z-50 relative"
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>

        {/* Mobile Navigation */}
        <div className={`
          fixed inset-0 bg-[#111111] md:hidden
          transition-all duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}>
          {/* Container do Menu */}
          <div className="min-h-screen flex flex-col bg-[#111111]">
            {/* Cabeçalho do Menu */}
            <div className="py-4 border-b border-[#D4B98C]/20">
              <div className="container flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-5 group" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="relative w-16 h-16 border border-[#D4B98C] flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-[2px] before:border before:border-[#D4B98C]/20">
                    <span className="text-2xl font-extralight tracking-wider text-[#D4B98C] relative z-10 logo-text">BR</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4B98C] to-[#A38E6A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                    <span className="absolute text-2xl font-extralight tracking-wider text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 z-20 logo-text">BR</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-extralight tracking-wider text-white logo-text">BR</span>
                    <span className="text-base font-light tracking-[0.2em] text-[#D4B98C] logo-text">AGENCY</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Links de Navegação */}
            <div className="flex-1 flex flex-col pt-8 px-4">
              <nav className="space-y-6">
                <Link 
                  href="/#inicio" 
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="container group">
                    <span className="text-lg text-white group-hover:text-[#D4B98C] transition-colors duration-300 heading-text">Início</span>
                    <div className="h-px w-0 bg-[#D4B98C] transition-all duration-300 group-hover:w-12 mt-2"></div>
                  </div>
                </Link>
                <Link 
                  href="/#servicos" 
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="container group">
                    <span className="text-lg text-white group-hover:text-[#D4B98C] transition-colors duration-300 heading-text">Serviços</span>
                    <div className="h-px w-0 bg-[#D4B98C] transition-all duration-300 group-hover:w-12 mt-2"></div>
                  </div>
                </Link>
                <Link 
                  href="/#portfolio" 
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="container group">
                    <span className="text-lg text-white group-hover:text-[#D4B98C] transition-colors duration-300 heading-text">Portfólio</span>
                    <div className="h-px w-0 bg-[#D4B98C] transition-all duration-300 group-hover:w-12 mt-2"></div>
                  </div>
                </Link>
                <Link 
                  href="/#sobre" 
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="container group">
                    <span className="text-lg text-white group-hover:text-[#D4B98C] transition-colors duration-300 heading-text">Sobre</span>
                    <div className="h-px w-0 bg-[#D4B98C] transition-all duration-300 group-hover:w-12 mt-2"></div>
                  </div>
                </Link>
                <Link 
                  href="/contato" 
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="container group">
                    <span className="text-lg text-white group-hover:text-[#D4B98C] transition-colors duration-300 heading-text">Contato</span>
                    <div className="h-px w-0 bg-[#D4B98C] transition-all duration-300 group-hover:w-12 mt-2"></div>
                  </div>
                </Link>
              </nav>
            </div>

            {/* Rodapé do Menu */}
            <div className="p-6 border-t border-[#D4B98C]/20">
              <div className="container">
                <div className="flex justify-center gap-8">
                  <a href="#" className="text-white/70 hover:text-[#D4B98C] transition-colors duration-300">
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#D4B98C] transition-colors duration-300">
                    <i className="fab fa-linkedin-in text-lg"></i>
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#D4B98C] transition-colors duration-300">
                    <i className="fab fa-whatsapp text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 