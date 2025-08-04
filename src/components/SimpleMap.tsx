'use client'

interface SimpleMapProps {
  latitude: number
  longitude: number
  className?: string
}

export default function SimpleMap({ latitude, longitude, className = "w-full h-64" }: SimpleMapProps) {
  return (
    <div className={`${className} rounded-lg shadow-lg border border-gray-200 overflow-hidden relative bg-gradient-to-br from-blue-50 to-green-50`}>
      {/* Fond de carte stylisé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-30"></div>
      
      {/* Grille de fond pour simuler une carte */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Marqueur principal */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#892444] text-white w-12 h-12 rounded-full border-4 border-white shadow-xl flex items-center justify-center font-bold text-lg relative">
          S
          {/* Effet de pulsation */}
          <div className="absolute inset-0 bg-[#892444] rounded-full animate-ping opacity-20"></div>
        </div>
      </div>
      
      {/* Légende de la carte */}
      <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow-md">
        <div className="text-sm font-medium text-gray-700">SAAMDIS</div>
        <div className="text-xs text-gray-500">Votre distributeur</div>
      </div>
      
      {/* Coordonnées */}
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow-md">
        <div className="text-xs text-gray-600">
          <div>Lat: {latitude.toFixed(6)}</div>
          <div>Lng: {longitude.toFixed(6)}</div>
        </div>
      </div>
      
      {/* Boutons d'action */}
      <div className="absolute bottom-4 right-4 space-y-2">
        {/* Lien vers Google Maps */}
        <a 
          href={`https://www.google.com/maps?q=${latitude},${longitude}`}
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
          href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}&zoom=16`}
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
      
      {/* Indicateur de localisation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-8">
        <div className="bg-[#892444] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
          Localisation SAAMDIS
        </div>
      </div>
    </div>
  )
} 