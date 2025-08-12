import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import Avantages from '@/components/Avantages'
import MeilleursProduits from '@/components/MeilleursProduits'
import Nouveautes from '@/components/Nouveautes'
import NosProduits from '@/components/NosProduits'
import QuiSommesNous from '@/components/QuiSommesNous'
import NosMarques from '@/components/NosMarques'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'SAAMDIS - Distributeur alimentaire à La Réunion',
  description: 'Découvrez SAAMDIS : importateur de saveurs uniques et de marques exclusives à La Réunion. Une offre variée pour tous les goûts.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <Avantages />
      <MeilleursProduits />
      <Nouveautes />
      <NosProduits />
      <QuiSommesNous />
      <NosMarques />

      <Footer />
    </main>
  )
} 