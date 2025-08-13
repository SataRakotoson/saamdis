import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductsList from '@/components/ProductsList'
import { getProduits } from '@/lib/airtable'

export const metadata = {
  title: 'SAAMDIS - Nos produits',
  description: 'SAAMDIS propose des produits pour tous les goûts, à tous les prix. Un fournisseur réunionnais proche de ses clients et à l’écoute du marché.',
  canonical: 'https://www.saamdis.fr/produits'
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