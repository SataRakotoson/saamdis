import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductsList from '@/components/ProductsList'
import { getProduits } from '@/lib/airtable'
import { Metadata } from 'next'

// Fonction pour générer des métadonnées dynamiques
export async function generateMetadata({ searchParams }: { searchParams: { category?: string } }): Promise<Metadata> {
  const category = searchParams.category
  
  // Mapping des catégories pour les titres et descriptions
  const categoryInfo: { [key: string]: { title: string, description: string } } = {
    'boissons': {
      title: 'SAAMDIS - Jus et Boissons',
      description: 'Découvrez notre sélection de jus et boissons de qualité. SAAMDIS, votre fournisseur de boissons à La Réunion.'
    },
    'confiseries': {
      title: 'SAAMDIS - Confiseries et Céréales',
      description: 'Explorez notre gamme de confiseries et céréales. SAAMDIS, votre fournisseur de snacks sucrés à La Réunion.'
    },
    'sales': {
      title: 'SAAMDIS - Snacks Salés',
      description: 'Découvrez nos snacks salés de qualité. SAAMDIS, votre fournisseur de snacks salés à La Réunion.'
    },
    'sucres': {
      title: 'SAAMDIS - Snacks Sucrés',
      description: 'Explorez notre sélection de snacks sucrés. SAAMDIS, votre fournisseur de snacks sucrés à La Réunion.'
    }
  }

  // Métadonnées par défaut (tous les produits)
  let title = 'SAAMDIS - Nos produits'
  let description = 'SAAMDIS propose des produits pour tous les goûts, à tous les prix. Un fournisseur réunionnais proche de ses clients et à l\'écoute du marché.'
  let canonical = 'https://www.saamdis.fr/produits'

  // Si une catégorie est spécifiée, utiliser les métadonnées spécifiques
  if (category && categoryInfo[category]) {
    title = categoryInfo[category].title
    description = categoryInfo[category].description
    canonical = `https://www.saamdis.fr/produits?category=${category}`
  }

  return {
    title,
    description,
    alternates: {
      canonical
    }
  }
}

export default async function Produits() {
  // Récupération des produits côté serveur
  const produits = await getProduits()

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

      {/* Products List Component */}
      <ProductsList produits={produits} />

      <Footer />
    </main>
  )
} 