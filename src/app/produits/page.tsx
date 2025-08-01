import Header from '@/components/Header'

export default function Produits() {
  const categories = [
    {
      id: 1,
      nom: "Snacks Sucrés",
      description: "Une sélection gourmande de snacks sucrés",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      produits: ["Biscuits", "Chocolats", "Bonbons", "Gâteaux"]
    },
    {
      id: 2,
      nom: "Snacks Salés",
      description: "Des snacks salés pour tous les goûts",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      produits: ["Chips", "Crackers", "Noix", "Olives"]
    },
    {
      id: 3,
      nom: "Confiseries et Céréales",
      description: "Le meilleur des confiseries et céréales",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      produits: ["Céréales", "Muesli", "Fruits secs", "Barres énergétiques"]
    },
    {
      id: 4,
      nom: "Jus et Boissons",
      description: "Des boissons rafraîchissantes et naturelles",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      produits: ["Jus de fruits", "Eaux minérales", "Sodas", "Thés"]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Nos Produits</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez notre gamme complète de produits de qualité
          </p>
        </div>
      </section>

      {/* Catégories de produits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nos Catégories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez nos différentes catégories de produits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((categorie) => (
              <div key={categorie.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={categorie.image} 
                  alt={categorie.nom}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {categorie.nom}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {categorie.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Produits inclus :</h4>
                    <ul className="text-gray-600">
                      {categorie.produits.map((produit, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {produit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Voir les produits
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Promotions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Promotions Spéciales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profitez de nos offres exclusives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-red-100 text-red-600 font-bold py-2 px-4 rounded-full mb-4 inline-block">
                -20%
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pack Familial</h3>
              <p className="text-gray-600 mb-4">Économisez sur nos packs familiaux</p>
              <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Commander
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 text-green-600 font-bold py-2 px-4 rounded-full mb-4 inline-block">
                Nouveau
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Produits Bio</h3>
              <p className="text-gray-600 mb-4">Découvrez notre gamme bio</p>
              <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Découvrir
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 text-blue-600 font-bold py-2 px-4 rounded-full mb-4 inline-block">
                Livraison
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Livraison Gratuite</h3>
              <p className="text-gray-600 mb-4">Pour toute commande supérieure à 50€</p>
              <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                En savoir plus
              </button>
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