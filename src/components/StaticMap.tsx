'use client'

interface StaticMapProps {
  latitude: number
  longitude: number
  zoom?: number
  className?: string
}

export default function StaticMap({ latitude, longitude, zoom = 16, className = "w-full h-64" }: StaticMapProps) {
  // URL de l'image de carte statique (OpenStreetMap)
  const mapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=${zoom}&size=600x400&maptype=mapnik&markers=${latitude},${longitude},red`

  return (
    <div className={`${className} rounded-lg shadow-lg border border-gray-200 overflow-hidden relative`}>
      {/* Image de la carte */}
      <img 
        src={mapUrl} 
        alt="Localisation SAAMDIS"
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback en cas d'erreur de chargement
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent) {
            parent.innerHTML = `
              <div class="flex items-center justify-center h-full bg-gray-100">
                <div class="text-center">
                  <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p class="text-gray-600">Carte temporairement indisponible</p>
                  <p class="text-sm text-gray-500 mt-2">Coordonnées : ${latitude}, ${longitude}</p>
                </div>
              </div>
            `
          }
        }}
      />
      
      {/* Marqueur personnalisé */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#892444] text-white w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center font-bold text-sm">
          S
        </div>
      </div>
      
      {/* Lien vers Google Maps */}
      <div className="absolute bottom-4 right-4">
        <a 
          href={`https://www.google.com/maps?q=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-700 px-3 py-2 rounded-lg shadow-md text-sm font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span>Voir sur Google Maps</span>
        </a>
      </div>
    </div>
  )
} 