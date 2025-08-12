'use client'

import Image from 'next/image';
import { useState } from 'react'
import React from "react";
// @ts-ignore
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MeilleursProduits() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  const produits = [
    {
      id: 1,
      nom: "Produit Premium 1",
      image: "1.webp",
    },
    {
      id: 2,
      nom: "Produit Premium 2",
      image: "2.webp",
    },
    {
      id: 3,
      nom: "Produit Premium 3",
      image: "3.webp",
    },
    {
      id: 4,
      nom: "Produit Premium 4",
      image: "4.webp",
    }
    
  ]

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Produits les plus demandés
          </h2>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {Array.from({ length: 3 }, (_, cycleIndex) =>
              produits.map((produit) => (
                <div
                  key={`${produit.id}-${cycleIndex}-${Math.random().toString(36).substr(2, 9)}`}
                  className="group overflow-hidden flex items-center justify-center"
                >
                  <Image
                    src={`/images/bestproducts/${produit.image}`}
                    alt={produit.nom}
                    width={400}
                    height={400}
                    className="cursor-grab transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              ))
            ).flat()}
          </Slider>
        </div>
      </div>
    </section>
  )
} 