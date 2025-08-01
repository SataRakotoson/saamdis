import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import Avantages from '@/components/Avantages'
import MeilleursProduits from '@/components/MeilleursProduits'
import Nouveautes from '@/components/Nouveautes'
import NosProduits from '@/components/NosProduits'
import QuiSommesNous from '@/components/QuiSommesNous'
import NosMarques from '@/components/NosMarques'

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

      {/* Bouton Contacter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors">
            Contacter
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Notre Entreprise</h3>
              <p className="text-gray-300">
                Votre distributeur de confiance à La Réunion
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Produits</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Snacks Sucrés</li>
                <li>Snacks Salés</li>
                <li>Confiseries</li>
                <li>Boissons</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Téléphone: +262 XXX XXX XXX</li>
                <li>Email: contact@example.com</li>
                <li>Adresse: La Réunion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Votre Distributeur. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 