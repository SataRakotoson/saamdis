import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function APropos() {
  return (
    <main className="min-h-screen about-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F6A136] ">
        <div className="hero-about container mx-auto px-4 text-center text-white ">
          <h1 className="text-5xl font-bold mb-6">SAAMDIS, en quelques mots</h1>
          <p className="text-xl">
            Découvrez notre histoire & nos engagements
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mx-5">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Qui sommes-nous ?</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#d14334]">SAAM DISTRIBUTION (SAAMDIS)</span> est une entreprise jeune mais ambitieuse, 
                  née d'un constat simple : <em className="text-[#29425c] font-medium">le marché réunionnais mérite mieux.</em>
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mieux en <span className="font-semibold text-[#e2a63f]">goût</span>, 
                  mieux en <span className="font-semibold text-[#e2a63f]">diversité</span>, 
                  mieux en <span className="font-semibold text-[#e2a63f]">accessibilité</span>.
                </p>

                <div className="bg-[#f7a139]/10 p-6 rounded-lg border-l-4 border-[#f7a139]">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    <span className="font-bold text-[#f7a139]">Notre mission ?</span> Dépoussiérer l'offre actuelle en apportant des produits innovants, 
                    variés et adaptés à tous — <em>tous les goûts, tous les moments de la journée, tous les budgets.</em>
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Nous allons chercher, <span className="font-semibold text-[#29425c]">pour vous</span>, des marques exclusives et des saveurs inédites 
                  qui n'ont jamais mis les pieds à La Réunion.
                </p>

                <div className="bg-[#e2a63f]/10 p-6 rounded-lg border-l-4 border-[#e2a63f]">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    <span className="font-bold text-[#e2a63f]">Notre engagement :</span> proposer des produits qui font la différence, 
                    à la fois dans la <span className="font-medium">qualité</span>, dans le <span className="font-medium">choix</span>, 
                    et dans l'<span className="font-medium">expérience consommateur</span>.
                  </p>
                </div>

                <p className="text-xl text-gray-800 leading-relaxed font-medium pt-4">
                  <span className="text-[#d14334] font-bold">SAAMDIS</span>, c'est bien plus qu'un importateur. 
                  C'est un <span className="text-[#29425c] font-semibold">partenaire de confiance</span>, 
                  un <span className="text-[#29425c] font-semibold">acteur engagé</span>, 
                  et bientôt — <span className="text-[#d14334] font-bold">le fournisseur de référence sur l'île.</span>
                </p>
              </div>
            </div>
              <Image src="/images/about-us.webp" alt="About Image" width={600} height={600} />
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  )
} 