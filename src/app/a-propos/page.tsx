import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import AboutPageJsonLd from '@/components/jsonld/AboutPageJsonLd'

export const metadata = {
  title: 'SAAMDIS - Qui sommes-nous ?',
  description: 'Chez SAAMDIS, nous importons des produits uniques pour créer une offre alimentaire plus riche, plus variée et plus accessible à La Réunion.',
}

export default function APropos() {
  return (
    <main className="min-h-screen about-page">
      <AboutPageJsonLd />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F6A136]">
        <div className="hero-about container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">SAAMDIS, en quelques mots</h1>
          <p className="text-xl font-light">
            Découvrez notre histoire & nos engagements
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mx-5">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Qui sommes-nous ?</h2>
              
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#d14334]">SAAM DISTRIBUTION (SAAMDIS)</span> est une entreprise jeune mais ambitieuse, 
                  née d'un constat simple : <em className="text-gray-800">le marché réunionnais mérite mieux.</em>
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mieux en <span className="font-medium text-gray-900">goût</span>, 
                  mieux en <span className="font-medium text-gray-900">diversité</span>, 
                  mieux en <span className="font-medium text-gray-900">accessibilité</span>.
                </p>

                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-semibold text-gray-900">Notre mission ?</span> Dépoussiérer l'offre actuelle en apportant des produits innovants, 
                  variés et adaptés à tous — <em>tous les goûts, tous les moments de la journée, tous les budgets.</em>
                </p>
              </div>
            </div>
              <Image
                src="/images/banner/cover_saamdis.webp"
                alt="Image À propos"
                width={800}
                height={800}
                className="w-full h-auto rounded-3xl object-cover"
              />
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center m-5">
            <Image
                src="/images/about-us.webp"
                alt="Image À propos"
                width={800}
                height={800}
                className="w-full h-auto rounded-3xl object-cover"
              />
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                  Nous allons chercher, <span className="font-medium text-gray-900">pour vous</span>, des marques exclusives et des saveurs inédites 
                  qui n'ont jamais mis les pieds à La Réunion.
                </p>

                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-semibold text-gray-900">Notre engagement :</span> proposer des produits qui font la différence, 
                  à la fois dans la <span className="font-medium">qualité</span>, dans le <span className="font-medium">choix</span>, 
                  et dans l'<span className="font-medium">expérience consommateur</span>.
                </p>

                <p className="text-xl text-gray-800 leading-relaxed font-medium pt-6">
                  <span className="text-[#d14334] font-bold">SAAMDIS</span>, c'est bien plus qu'un importateur. 
                  C'est un <span className="text-gray-900 font-semibold">partenaire de confiance</span>, 
                  un <span className="text-gray-900 font-semibold">acteur engagé</span>, 
                  et bientôt<br /> <span className="text-[#d14334] font-bold">" Le fournisseur de référence sur l'île."</span>
                </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  )
} 