'use client'
import Image from "next/image";
// @ts-ignore
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false
  };

  const banners = [
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
  ]
  
  return (
    <section className="HeroBanner relative">
      {/* Contenu */}
      <div className="relative z-10 w-full">
        <div className="slider-container">
          <Slider {...settings}>
            {banners.map((banner) => (
              <div key={banner.id} className="relative cursor-grab">
                <Image
                  src={`/images/banner/${banner.image}`} 
                  alt="Hero Banner" 
                  width={1200} 
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
} 