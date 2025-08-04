'use client'
import React from 'react';
import Image from 'next/image';
// @ts-ignore
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NosMarques() {
  const marques = [
    { id: 1, nom: 'Délices de Fruits', logo: '/images/marques/delice.webp' },
    { id: 2, nom: 'MAD', logo: '/images/marques/mad.webp' },
    { id: 3, nom: 'Moulin d\'Or', logo: '/images/marques/moulindor.webp' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Marques
          </h2>
          <p className="text-gray-600 light-italic px-5">
            SAAMDIS, distributeur alimentaire de confiance à La Réunion, sélectionne pour vous des marques reconnues comme MAD, Moulin d'Or, Délices de Fruits, et bien d'autres à venir.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {marques.map((marque) => (
              <div key={marque.id} className="px-4">
                <div className="p-8 flex flex-col items-center justify-center min-h-[250px]">
                  <div className="w-40 h-40 mb-6 flex items-center justify-center">
                    <Image 
                      src={marque.logo} 
                      alt={marque.nom} 
                      width={200} 
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <p className='text-center text-gray-600 light-italic' >Besoin de snacks, boissons ou confiseries pour votre commerce à La Réunion ? Contactez-nous dès aujourd’hui!</p>
          <div className='flex justify-center mt-5'>
            <a
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors text-center"
            >
              Contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NosMarques; 