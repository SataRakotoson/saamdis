'use client'

interface WorkingMapProps {
  latitude: number
  longitude: number
  className?: string
}

export default function WorkingMap({ latitude, longitude, className = "w-full h-64" }: WorkingMapProps) {
  // Utilisation d'une image de carte statique qui fonctionne
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C${latitude},${longitude}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`

  return (
    <div className={`${className} rounded-lg shadow-lg border border-gray-200 overflow-hidden relative`}>
      {/* Image de la carte Google Maps */}
      <img 
        src={mapUrl} 
        alt="Localisation SAAMDIS"
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback vers une carte stylisée si l'image ne charge pas
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent) {
            parent.innerHTML = `
              <div class="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 relative">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-30"></div>
                <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div class="bg-[#892444] text-white w-12 h-12 rounded-full border-4 border-white shadow-xl flex items-center justify-center font-bold text-lg">
                    S
                  </div>
                </div>
                <div class="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow-md">
                  <div class="text-sm font-medium text-gray-700">SAAMDIS</div>
                  <div class="text-xs text-gray-500">Votre distributeur</div>
                </div>
                <div class="absolute bottom-4 right-4">
                  <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank" rel="noopener noreferrer" class="bg-white text-gray-700 px-3 py-2 rounded-lg shadow-md text-sm font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>Voir sur Google Maps</span>
                  </a>
                </div>
              </div>
            `
          }
        }}
      />
      
      {/* Marqueur personnalisé par-dessus */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
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