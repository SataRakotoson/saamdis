'use client'

import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              LOGO
            </Link>
          </div>

          {/* Menu de navigation */}
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

          {/* Réseaux sociaux */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
} 