import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-around px-4 md:px-10 gap-8">
          <div>
            <Image src="/images/logo-white.png" alt="Logo" width={140} height={140} />
            <ul className="text-gray-300 space-y-2 mt-2">
              <li>+262 693 03 22 41</li>
              <li>contact@saamdis.fr</li>
              <li>8 rue Adolphe Ramassamy, 97490 Sainte Clotilde, <br />
              La Réunion</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  A propos de nous
                </Link>
              </li>
              <li>
                <Link href="/produits" className="hover:text-white transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>
                     <div>
             <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
             <div className="flex space-x-4">
               <a href="https://www.facebook.com/saamdis/" target='blank' className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                 <Facebook size={40} />
               </a>
               <a href="https://www.instagram.com" target='blank' className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                 <Instagram size={40} />
               </a>
             </div>
           </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-gray-500 text-sm">
          <p>&copy; 2025 SAAMDIS. Tous droits réservés I Design by Cortex Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 