'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Footer from '@/components/Footer'


export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#9579a7] about-page">
        <div className="container mx-auto px-4 text-center text-white hero-about">
          <h1 className="text-5xl font-bold mb-6">Contactez-Nous</h1>
          <p className="text-xl">
            Nous sommes là pour vous aider. N'hésitez pas à nous contacter !
          </p>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="p-1 md:p-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Nos Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="space-x-4 card-contact">
                  <Phone className="w-10 h-10 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-800">Téléphone</h3>
                    <p className="text-gray-600">+262693032241</p>
                </div>

                <div className="space-x-4 card-contact">
                  <Mail className="w-10 h-10 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@saamdis.fr</p>
                    <p className="text-gray-600">commercial@saamdis.fr</p>
                    <p className="text-gray-600 text-sm">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="space-x-4 card-contact">
                  <MapPin className="w-10 h-10 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-800">Notre Siège Social</h3>
                    <p className="text-gray-600">SAAM DISTRIBUTION</p>
                    <p className="text-gray-600 text-sm">18 Rue Adolphe Ramassamy<br />
                    97490 Sainte Clotilde<br />
                    LA RÉUNION
                    </p>                    
                    
                </div>

                <div className="space-x-4 card-contact">
                  <Clock className="w-10 h-10 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-800">Service commercial</h3>
                    <p className="text-gray-600">Lundi - Vendredi : 8h00 - 18h00</p>
                    <p className="text-gray-600">Samedi : 9h00 - 17h00</p>
                    <p className="text-gray-600">Dimanche : Fermé</p>
                </div>
              </div>
            </div>

            {/* Carte */}
            <div>
                {/* Carte */}
               <div className="mt-8">
                 <h3 className="text-lg font-semibold text-gray-800 mb-4 italic">Notre localisation</h3>
                 <div className="w-full h-80 rounded-lg shadow-lg border border-gray-200 overflow-hidden relative">
                   {/* Image de carte réelle en arrière-plan */}
                   <iframe
                     src="https://www.openstreetmap.org/export/embed.html?bbox=55.4839%2C-20.9026%2C55.4941%2C-20.8927&amp;layer=mapnik&amp;marker=-20.89764550577095%2C55.488972728835634"
                     width="100%"
                     height="100%"
                     style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                     title="Carte SAAMDIS"
                   ></iframe>
                   
                   {/* Overlay pour le style personnalisé */}
                   <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none"></div>
                   
                   {/* Légende de la carte */}
                   <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow-md">
                     <div className="text-sm font-medium text-gray-700">SAAMDIS</div>
                     <div className="text-xs text-gray-500">Votre distributeur</div>
                   </div>
                   
                   {/* Coordonnées */}
                   <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow-md">
                     <div className="text-xs text-gray-600">
                       <div>Lat: -20.897646</div>
                       <div>Lng: 55.488973</div>
                     </div>
                   </div>
                   
                   {/* Boutons d'action */}
                   <div className="absolute bottom-4 right-4 space-y-2">
                     {/* Lien vers Google Maps */}
                     <a 
                       href="https://www.google.com/maps?q=-20.89764550577095,55.488972728835634"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-white text-gray-700 px-3 py-2 rounded-lg shadow-md text-sm font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2"
                     >
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                       </svg>
                       <span>Google Maps</span>
                     </a>
                     
                     {/* Lien vers OpenStreetMap */}
                     <a 
                       href="https://www.openstreetmap.org/?mlat=-20.89764550577095&mlon=55.488972728835634&zoom=16"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-white text-gray-700 px-3 py-2 rounded-lg shadow-md text-sm font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2"
                     >
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                       </svg>
                       <span>OpenStreetMap</span>
                     </a>
                   </div>
                   
                  </div>

                  {/* INFORMATIONS LEGALES */}
                  <div className="max-w-2xl mx-auto mt-2">
                    <div className="bg-[#f0f0f0] bg-white rounded-lg shadow-lg p-8">
                      <div className="flex items-center mb-6">
                        {/* <div className="w-12 h-12 bg-[#f7a139] rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                          </svg>
                        </div> */}
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800">SAAM DISTRIBUTION</h2>
                          <p className="text-gray-600">Société de distribution professionnelle</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">SIREN</span>
                          <span className="font-semibold text-gray-800">988 126 389</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">RCS</span>
                          <span className="font-semibold text-gray-800">988 126 389 R.C.S. Saint Denis</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Secteur d'activité</span>
                          <span className="font-semibold text-gray-800">Distribution alimentaire</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3">
                          <span className="text-gray-600">Zone de livraison</span>
                          <span className="font-semibold text-gray-800">Île de La Réunion</span>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
               </div>
             </div>
           </div>
         </section>

         {/* Informations Légales */}
         <section className="py-16 bg-gray-50">
           <div className="container mx-auto px-4">
             
           </div>
         </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 