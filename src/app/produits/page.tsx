import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Produits() {
  const categories = [
    { id: 'all', nom: "Tous les produits", color: "bg-[#892444]" },
    { id: 'sucres', nom: "Snacks sucrés", color: "home-card-1" },
    { id: 'sales', nom: "Snacks salés", color: "home-card-2" },
    { id: 'confiseries', nom: "Confiseries et céréales", color: "home-card-3" },
    { id: 'boissons', nom: "Jus et boissons", color: "home-card-4" }
  ]

  const produits = [
    {
      id: 1,
      nom: "Adoro - Gâteau moelleux au cacao",
      subtitle: "30g - packing 24 - DLV 09 mois",
      description: "Un gâteau moelleux au cacao qui ravira tous les amateurs de chocolat.",
      image: "/images/products/1.webp",
      categorie: "sucres",
      tagColor: "bg-red-500"
    },
    {
      id: 2,
      nom: "MAD CORN'S",
      subtitle: "Chips de maïs barbecue",
      description: "Chips de maïs barbecue, une saveur unique et addictive pour vos moments de détente.",
      image: "/images/products/2.webp",
      categorie: "sales",
      tagColor: "bg-[#f7a139]"
    },
    {
      id: 3,
      nom: "MAD Flakes",
      subtitle: "Céréales chocolatées",
      description: "Céréales chocolatées, parfaites pour un petit-déjeuner gourmand et énergétique.",
      image: "/images/products/3.webp",
      categorie: "confiseries",
      tagColor: "bg-[#29425c]"
    },
    {
      id: 4,
      nom: "délice - NECTAR TROPICAL",
      subtitle: "Jus de fruits tropicaux",
      description: "Jus de fruits tropicaux, un mélange rafraîchissant de mangue et fruits exotiques.",
      image: "/images/products/4.webp",
      categorie: "boissons",
      tagColor: "bg-green-500"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#892444] about-page">
        <div className="container mx-auto px-4 text-center text-white hero-about">
          <h1 className="text-5xl font-bold mb-6">Nos produits</h1>
          <p className="text-xl mx-auto">
            Explorez notre sélection de produits alimentaires variés et soigneusement choisis pour leur qualité.
          </p>
        </div>
      </section>

      {/* Search and Categories Section */}
      <section className="pt-12 bg-gray-100">
        <div className="container mx-auto px-4 relative">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Rechercher un produit.."
                className="w-full pl-12 pr-12 py-4 bg-white rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f7a139] focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 categories-filter">
            {categories.map((categorie) => (
              <button
                key={categorie.id}
                className={`${categorie.color} text-white px-6 py-3 hover:opacity-90 transition-opacity`}
              >
                {categorie.nom}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {produits.map((produit) => (
              <div key={produit.id} className="border-2 border-gray-200 p-4 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                <div className="relative">
                  <div className="w-full h-48 bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src={produit.image}
                      alt={produit.nom}
                      width={200}
                      height={200}
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110 hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-medium italic font-semibold text-gray-800 mb-2">{produit.nom}</h3>
                  <p className='subtitle text-gray-600 mb-3 text-sm italic'> {produit.subtitle}</p>
                  <p className="text-sm text-gray-600 mb-2">{produit.description}</p>
                </div>
                {/* Colored tag */}
                {
                  produit.categorie === 'sucres' && <Image src="/images/form/polygon-red.svg" alt="Clip Triangle" width={40} height={40} className='absolute bottom-0 right-0' />
                }
                {
                  produit.categorie === 'sales' && <Image src="/images/form/polygon-yellow.svg" alt="Clip Triangle" width={40} height={40} className='absolute bottom-0 right-0' />
                }
                {
                  produit.categorie === 'confiseries' && <Image src="/images/form/polygon-purple.svg" alt="Clip Triangle" width={40} height={40} className='absolute bottom-0 right-0' />
                }
                {
                  produit.categorie === 'boissons' && <Image src="/images/form/polygon-green.svg" alt="Clip Triangle" width={40} height={40} className='absolute bottom-0 right-0' />
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 