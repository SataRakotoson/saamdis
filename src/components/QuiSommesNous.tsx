import Image from 'next/image'

export default function QuiSommesNous() {
  return (
    <section className="pt-[8rem] bg-white relative overflow-hidden">
      <div className="container mx-auto relative">
        <Image 
          src="/images/guy.webp" 
          alt="Qui Sommes-Nous" 
          width={630} 
          height={600} 
          className="guy-image"
        />
        <div className="container mx-auto p-10 relative z-10 bg-[#E4953E]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="col-span-1 relative">
            </div>
            <div className="col-span-1 text-white">
              <h2 className="text-4xl font-bold mb-6">Qui Sommes-Nous</h2>
              <p className="text-xl leading-relaxed">
                SAAMDIS est un distributeur alimentaire basé à La Réunion, spécialisé dans les produits variés et de qualité.
                <br /> <br />
                Nous proposons une large gamme 
                de snacks, boissons, chips, jus et confiseries, adaptés aux goûts locaux. Notre mission : dynamiser le marché réunionnais avec des produits originaux, accessibles et soigneusement sélectionnés.
              </p>
              <div className="flex justify-center">
                <button className='bg-white text-[#E4953E] text-white px-6 py-2 rounded-md mt-4'>En savoir plus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 