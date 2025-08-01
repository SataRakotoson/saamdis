import React from 'react';

const NosMarques: React.FC = () => {
  const marques = [
    { id: 1, nom: 'Marque 1', logo: '/images/marques/marque1.png' },
    { id: 2, nom: 'Marque 2', logo: '/images/marques/marque2.png' },
    { id: 3, nom: 'Marque 3', logo: '/images/marques/marque3.png' },
    { id: 4, nom: 'Marque 4', logo: '/images/marques/marque4.png' },
    { id: 5, nom: 'Marque 5', logo: '/images/marques/marque5.png' },
    { id: 6, nom: 'Marque 6', logo: '/images/marques/marque6.png' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Marques
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous travaillons avec les meilleures marques du marché
          </p>
        </div>
        
        <div className="flex space-x-8 overflow-hidden">
          {marques.map((marque) => (
            <div 
              key={marque.id} 
              className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
            >
              <span className="text-gray-600 font-semibold">{marque.nom}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosMarques; 