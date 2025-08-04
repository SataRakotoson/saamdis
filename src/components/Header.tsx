'use client'

import { useState } from 'react'
import { Facebook, Instagram, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenu}>
              <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
            </Link>
          </div>

          {/* Menu de navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/produits" className="text-gray-700 hover:text-primary transition-colors">
              Produits
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contactez-nous
            </Link>
          </nav>

          {/* Réseaux sociaux desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.facebook.com/saamdis/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
          </div>

          {/* Bouton hamburger mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Overlay pour le menu mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Menu mobile sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header du menu mobile */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-lg font-semibold text-gray-800">SAAMDIS</span>
          </div>
          <button 
            onClick={closeMenu}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation mobile */}
        <nav className="py-6">
          <div className="flex flex-col space-y-2">
            <Link 
              href="/" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors py-3 px-6 text-lg font-medium"
            >
              Accueil
            </Link>
            <Link 
              href="/a-propos" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors py-3 px-6 text-lg font-medium"
            >
              À propos
            </Link>
            <Link 
              href="/produits" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors py-3 px-6 text-lg font-medium"
            >
              Produits
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors py-3 px-6 text-lg font-medium"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Réseaux sociaux mobile */}
          <div className="mt-8 pt-6 px-6 border-t border-gray-200">
            <h3 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide">Suivez-nous</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.facebook.com/saamdis/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact info mobile */}
          <div className="mt-8 pt-6 px-6 border-t border-gray-200">
            <h3 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide">Contact</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>+262 693 03 22 41</p>
              <p>contact@saamdis.fr</p>
              <p className="leading-relaxed">
                18 Rue Adolphe Ramassamy<br />
                97490 Sainte Clotilde<br />
                La Réunion
              </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
} 