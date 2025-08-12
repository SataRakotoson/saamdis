import Image from 'next/image'

export default function Nouveautes() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Les Nouveautés
          </h2>
        </div>
        <div className="w-full h-64 sm:h-full">
          <Image src="/images/nouveautes.webp" alt="Nouveautés" width={1000} height={1000} className="w-full h-full object-cover" />
        </div>
        <div className="w-full flex justify-center mt-2">
          <a href="/produits" className="bg-primary text-white px-6 py-2 rounded-md inline-block">Voir plus</a>
        </div>
      </div>
    </section>
  )
} 