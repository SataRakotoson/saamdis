import Header from '@/components/Header'

export default function APropos() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">À Propos de Nous</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez notre histoire et notre mission
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Fondée à La Réunion, notre entreprise est née de la passion pour la qualité 
                et le service client. Depuis nos débuts, nous nous efforçons d'offrir les 
                meilleurs produits à nos clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre engagement envers l'excellence nous a permis de devenir un partenaire 
                de confiance pour de nombreuses entreprises et particuliers sur l'île.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-lg">Image de l'entreprise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Notre Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fournir des produits de qualité exceptionnelle avec un service client 
              irréprochable à tous nos clients de La Réunion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Qualité</h3>
              <p className="text-gray-600">
                Nous sélectionnons rigoureusement chaque produit pour garantir la meilleure qualité.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Service</h3>
              <p className="text-gray-600">
                Notre équipe dédiée est là pour vous accompagner à chaque étape.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Nous innovons constamment pour améliorer notre offre et nos services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Votre Distributeur. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  )
} 