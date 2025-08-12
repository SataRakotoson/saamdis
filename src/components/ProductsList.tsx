'use client'

import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

interface Produit {
  id: string
  nom: string
  specification: string
  description: string
  image: string
  categorie: string
  tagColor: string
}

interface ProductsListProps {
  produits: Produit[]
}

export default function ProductsList({ produits }: ProductsListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const searchParams = useSearchParams()

  // Détection automatique de la catégorie depuis l'URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    if (categoryFromUrl) {
      // Mapping des paramètres d'URL vers les IDs de catégorie
      const categoryMapping: { [key: string]: string } = {
        'sucres': 'sucres',
        'sales': 'sales',
        'confiseries_cereales': 'confiseries_cereales',
        'jus_boissons': 'jus_boissons'
      }
      
      if (categoryMapping[categoryFromUrl]) {
        setSelectedCategory(categoryMapping[categoryFromUrl])
      }
    }
  }, [searchParams])

  const categories = [
    { id: 'all', nom: "Tous les produits", color: "bg-[#892444]" },
    { id: 'sucres', nom: "Snacks sucrés", color: "home-card-1" },
    { id: 'sales', nom: "Snacks salés", color: "home-card-2" },
    { id: 'confiseries_cereales', nom: "Confiseries et céréales", color: "home-card-3" },
    { id: 'jus_boissons', nom: "Jus et boissons", color: "home-card-4" }
  ]

  // Fonction de filtrage des produits avec useMemo pour optimiser les performances
  const filteredProducts = useMemo(() => {
    let filtered = produits

    // Filtrage par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(produit => produit.categorie === selectedCategory)
    }

    // Filtrage par recherche
    if (searchTerm.trim() !== '') {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(produit => 
        produit.nom.toLowerCase().includes(searchLower) ||
        produit.specification.toLowerCase().includes(searchLower) ||
        produit.description.toLowerCase().includes(searchLower)
      )
    }

    return filtered
  }, [produits, searchTerm, selectedCategory])

  return (
    <>
      {/* Search and Categories Section */}
      <section className="pt-12 bg-gray-100">
        <div className="container mx-auto px-4 relative">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Rechercher un produit.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-gray-600 pl-12 pr-12 py-4 bg-white rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f7a139] focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 categories-filter">
            {categories.map((categorie) => (
              <button
                key={categorie.id}
                onClick={() => setSelectedCategory(categorie.id)}
                className={`${categorie.color} text-white px-6 py-3 hover:opacity-90 transition-opacity ${
                  selectedCategory === categorie.id ? 'ring-2 ring-white ring-opacity-50' : ''
                }`}
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
          {/* Résultats de recherche */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun produit trouvé pour votre recherche.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((produit) => (
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
                    <p className='subtitle text-gray-600 mb-3 text-sm italic'> {produit.specification}</p>
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
                    produit.categorie === 'confiseries_cereales' && <Image src="/images/form/polygon-purple.svg" alt="Clip Triangle" width={40} height={40} className='absolute bottom-0 right-0' />
                  }
                  {
                    produit.categorie === 'jus_boissons' && <Image src="/images/form/polygon-green.svg" alt="Clip Triangle" width={40} height={40} className='absolute bottom-0 right-0' />
                  }
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
