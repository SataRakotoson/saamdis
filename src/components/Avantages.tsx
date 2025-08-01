import { Truck, Shield, Star } from 'lucide-react'
import Image from 'next/image'

export default function Avantages() {
  const avantages = [
    {
      image: "box.svg",
      title: "Livraison Rapide",
      description: "Des produits adaptés à chaque envie grâce à une large variété de formats et de saveurs."
    },
    {
      image: "badge.svg",
      title: "Qualité Garantie",
      description: "Offrez-vous une expérience gustative inédite en découvrant nos nouvelles marques de produits."
    },
    {
      image: "dollar.svg",
      title: "Service Premium",
      description: "Des produits accessibles à prix compétitifs, idéals pour maximiser votre potentiel de vente."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {avantages.map((avantage, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center p-8 ">
              <Image src={`/images/icons/${avantage.image}`} alt={avantage.title} width={100} height={100} />
              {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {avantage.title}
              </h3> */}
              <p className="text-gray-600 leading-relaxed mt-5">
                {avantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 