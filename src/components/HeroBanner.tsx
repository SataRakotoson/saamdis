import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative h-[500px] flex justify-center bg-red-500">
      
      {/* Contenu */}
      <div className="relative z-10 text-white">
        <Image
         src="/images/banner.webp" alt="Hero Banner" width={1000} height={1000}
         className="banner-image"
         />
        {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 text-left">
          Votre <br /> Distributeur de <br /> Confiance
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-start">
          À La Réunion, profitez d'une sélection <br /> exclusive de produits variés
        </p>
        <button className="mt-8 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
          Découvrir nos produits
        </button> */}
      </div>
    </section>
  )
} 