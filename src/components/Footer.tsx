import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-10">
        <div className="flex justify-around px-10  gap-8">
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
              <li>Accueil</li>
              <li>A propos de nous</li>
              <li>Produits</li>
              <li>Contactez-nous</li>
            </ul>
          </div>
                     <div>
             <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
             <div className="flex space-x-4">
               <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                 <Facebook size={40} />
               </a>
               <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
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